import React, { useReducer, useContext } from 'react';
import axios from 'axios';
import NyTimesContext from './nyTimesContext';
import NyTimesReducer from './nyTimesReducer';
import SnackbarContext from '../snackbar/snackbarContext';
import { GET_MOVIES, GET_MOVIE, SEARCH_MOVIES, SET_LOADING } from '../types';

<<<<<<< HEAD
let nyTimesKey;

if (process.env.NODE_ENV !== 'production') {
  nyTimesKey = process.env.REACT_APP_NYT_API_KEY;
} else {
  nyTimesKey = process.env.NYT_API_KEY;
}

=======
>>>>>>> 10c5e33a206221687c7446a6488c374fe69ee193
const NyTimesState = props => {
  const initialState = {
    movies: [],
    movie: {},
    loading: false
  };

  const [state, dispatch] = useReducer(NyTimesReducer, initialState);
  const snackbarContext = useContext(SnackbarContext);

  /******************************
   * Get Movies Reviews
   *******************************/
  const getMovies = async () => {
    setLoading();

    const res = await axios.get(
<<<<<<< HEAD
      `https://api.nytimes.com/svc/movies/v2/reviews/{type}.json?api-key=${nyTimesKey}`
=======
      `https://api.nytimes.com/svc/movies/v2/reviews/{type}.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`
>>>>>>> 10c5e33a206221687c7446a6488c374fe69ee193
    );

    dispatch({
      type: GET_MOVIES,
      payload: res.data.results
    });
    sessionStorage.setItem('movies', JSON.stringify(res.data.results));
  };

  /******************************
   * Search Movies Reviews
   *******************************/
  const searchMovies = async text => {
    setLoading();

    const res = await axios.get(
<<<<<<< HEAD
      `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${text}&api-key=${nyTimesKey}`
=======
      `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${text}&api-key=${process.env.REACT_APP_NYT_API_KEY}`
>>>>>>> 10c5e33a206221687c7446a6488c374fe69ee193
    );

    dispatch({
      type: SEARCH_MOVIES,
      payload: res.data.results
    });
    sessionStorage.setItem('movies', JSON.stringify(res.data.results));

    if (res.data.results.length === 0) {
      snackbarContext.snackbar('No results found', 'success', 4000);
      sessionStorage.removeItem('movies');
    }
  };

  /******************************
   * Get Movie Review
   *******************************/
  const getMovie = title => {
    let movies = initialState.movies;

    if (sessionStorage.getItem('movies')) {
      movies = JSON.parse(sessionStorage.getItem('movies'));
    }

    let movie = movies.filter(movie => movie.display_title === title);
    dispatch({
      type: GET_MOVIE,
      payload: movie[0]
    });
  };

  /***************************
   *  Set Loading to true
   ***************************/

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <NyTimesContext.Provider
      value={{
        movies: state.movies,
        movie: state.movie,
        loading: state.loading,
        getMovies,
        searchMovies,
        getMovie
      }}
    >
      {props.children}
    </NyTimesContext.Provider>
  );
};

export default NyTimesState;
