import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NyTimesContext from '../../context/nytimes/nyTimesContext';

const Navbar = ({ icon, title }) => {
  const nyTimesContext = useContext(NyTimesContext);
  const { setMoviesOnClick } = nyTimesContext;

  return (
    <nav className="navbar bg-primary">
      <div className="navbar-container">
        <Link to="/" onClick={setMoviesOnClick}>
          <h1>
            <i className={icon}></i> {title}
          </h1>
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Movie Reviews',
  icon: 'fas fa-video'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};
export default Navbar;
