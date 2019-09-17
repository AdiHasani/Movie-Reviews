import { SEARCH_MOVIES, SET_LOADING, GET_MOVIES, GET_MOVIE } from '../types';

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
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
