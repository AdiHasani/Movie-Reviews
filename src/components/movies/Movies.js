import React from 'react';
import MovieItem from './MoviesItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Movies = ({ movies, loading }) => {
  if (loading) {
    return (
      <div className="text-center">
        <Spinner />
      </div>
    );
  } else {
    return (
      <div className="grid-4">
        {movies.map((movie, index) => (
          <MovieItem key={`movie${index}`} movie={movie} />
        ))}
      </div>
    );
  }
};

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Movies;
