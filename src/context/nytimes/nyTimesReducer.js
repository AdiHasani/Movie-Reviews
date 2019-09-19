import {
  SEARCH_MOVIES,
  SET_LOADING,
  GET_MOVIES,
  GET_MOVIE,
  SET_NO_RESULT,
  REMOVE_NO_RESULT,
  SET_FIRSTCALL,
  REMOVE_FIRSTCALL,
  SET_SEARCHING,
  REMOVE_SEARCHING
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: action.payload,
        loading: false
      };
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
        cachedMovies: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_NO_RESULT:
      return {
        ...state,
        noResult: true
      };
    case REMOVE_NO_RESULT:
      return {
        ...state,
        noResult: false
      };
    case SET_FIRSTCALL:
      return {
        ...state,
        firstCall: false,
        loading: false
      };
    case REMOVE_FIRSTCALL:
      return {
        ...state,
        firstCall: true
      };
    case SET_SEARCHING:
      return {
        ...state,
        search: true
      };
    case REMOVE_SEARCHING:
      return {
        ...state,
        search: false
      };
    default:
      return state;
  }
};
