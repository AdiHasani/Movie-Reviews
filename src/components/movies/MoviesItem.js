import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MoviesItem = ({ movie: { display_title, multimedia } }) => {
  return (
    <Link to={`/movie/${display_title}`}>
      <div className="card text-center">
        <img
          src={multimedia ? multimedia.src : 'no-img.png'}
          alt="Scene from movie"
          className="card-img"
        />
        <h4 className="text-red mb-1">{display_title}</h4>
      </div>
    </Link>
  );
};

MoviesItem.propTypes = {
  movie: PropTypes.object.isRequired
};

export default MoviesItem;
