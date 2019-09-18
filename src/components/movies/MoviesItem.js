import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MoviesItem = ({ movie: { display_title, multimedia } }) => {
  return (
    <Link className="card-link" to={`/movie/${display_title}`}>
      <div className="card text-center">
        <img
          src={multimedia ? multimedia.src : 'no-img.png'}
          alt="Scene from movie"
          className="card-img"
        />
        <div className="card-footer">
          <h4>{display_title}</h4>
        </div>
      </div>
    </Link>
  );
};

MoviesItem.propTypes = {
  movie: PropTypes.object.isRequired
};

export default MoviesItem;
