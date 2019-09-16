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
      <div style={movieStyle}>
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

const movieStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '2rem'
};

export default Movies;
