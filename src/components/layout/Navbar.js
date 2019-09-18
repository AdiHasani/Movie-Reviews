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
        <h1>
          <i className={icon}></i> {title}
        </h1>
        <ul>
          <li>
            <Link to="/" onClick={setMoviesOnClick}>
              Home
            </Link>
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
