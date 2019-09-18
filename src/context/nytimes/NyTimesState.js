import React, { useReducer } from 'react';
import axios from 'axios';
import NyTimesContext from './nyTimesContext';
import NyTimesReducer from './nyTimesReducer';
import {
  GET_MOVIES,
  GET_MOVIE,
  SEARCH_MOVIES,
  SET_LOADING,
  SET_NO_RESULT,
  REMOVE_NO_RESULT,
  SET_FIRSTCALL
} from '../types';

let nyTimesKey = process.env.REACT_APP_NYT_API_KEY;

const NyTimesState = props => {
  const initialState = {
    movies: [],
    movie: {},
    cachedMovies: [],
    firstCall: true,
    noResult: false,
    loading: false
  };

  const [state, dispatch] = useReducer(NyTimesReducer, initialState);

  /******************************
   * Get Movies Reviews
   *******************************/
  const getMovies = async () => {
    setLoading();

    if (state.firstCall) {
      const res = await axios.get(
        `https://api.nytimes.com/svc/movies/v2/reviews/{type}.json?api-key=${nyTimesKey}`
      );

      dispatch({
        type: GET_MOVIES,
        payload: res.data.results
      });
      setItem('movies', res.data.results);
      setItem('cachedMovies', res.data.results);
    }

    dispatch({ type: SET_FIRSTCALL });
  };

  /******************************
   * Search Movies Reviews
   *******************************/
  const searchMovies = async text => {
    setLoading();

    const res = await axios.get(
      `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${text}&api-key=${nyTimesKey}`
    );

    dispatch({
      type: SEARCH_MOVIES,
      payload: res.data.results
    });

    setItem('movies', res.data.results);

    if (res.data.results.length === 0) {
      dispatch({ type: SET_NO_RESULT });
      dispatch({
        type: SEARCH_MOVIES,
        payload: getItem('cachedMovies')
      });
      setItem('movies', getItem('cachedMovies'));
    }
  };

  /******************************
   * Get Movie Review
   *******************************/
  const getMovie = title => {
    let movies = state.movies;

    if (getItem('movies').length > 0) {
      movies = getItem('movies');
    }

    let movie = movies.filter(movie => movie.display_title === title);
    dispatch({
      type: GET_MOVIE,
      payload: movie[0]
    });
  };

  /*****************************
   *  Home button clicked
   *****************************/

  const setMoviesOnClick = () => {
    const movies = getItem('cachedMovies');
    dispatch({
      type: GET_MOVIES,
      payload: movies
    });
    setItem('movies', movies);
  };

  /**************************
   * No results found!
   **************************/

  const removeNoResult = () => {
    dispatch({ type: REMOVE_NO_RESULT });
  };

  /***************************
   *  Set Loading to true
   ***************************/

  const setLoading = () => dispatch({ type: SET_LOADING });

  /*********************
   * sessionStorage
   *********************/

  const setItem = (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value));
  };

  const getItem = key => {
    return JSON.parse(sessionStorage.getItem(key));
  };

  return (
    <NyTimesContext.Provider
      value={{
        movies: state.movies,
        movie: state.movie,
        loading: state.loading,
        noResult: state.noResult,
        getMovies,
        searchMovies,
        getMovie,
        setMoviesOnClick,
        removeNoResult
      }}
    >
      {props.children}
    </NyTimesContext.Provider>
  );
};

export default NyTimesState;
