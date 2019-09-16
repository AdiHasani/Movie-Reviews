import React from 'react';
import { Link } from 'react-router-dom';

const MoviesItem = props => {
  const { display_title, multimedia } = props.movie;
  return (
    <Link to={`/movie/${display_title}`}>
      <div className="card text-center">
        <img
          src={multimedia ? multimedia.src : 'no-img.png'}
          alt="Scene from movie"
          className="card-img"
        />
        <h2 className="movie-title mb-1">{display_title}</h2>
      </div>
    </Link>
  );
};

export default MoviesItem;
