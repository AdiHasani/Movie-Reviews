import React, { useContext, useEffect } from 'react';
import MovieItem from './MoviesItem';
import Spinner from '../layout/Spinner';
import NyTimesContext from '../../context/nytimes/nyTimesContext';

const Movies = () => {
  const nyTimesContext = useContext(NyTimesContext);
  const { getMovies, loading, movies } = nyTimesContext;

  useEffect(() => {
      getMovies();
    // eslint-disable-next-line
  }, []);

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

export default Movies;
