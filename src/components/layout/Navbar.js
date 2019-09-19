import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NyTimesContext from '../../context/nytimes/nyTimesContext';

const Navbar = ({ icon, title }) => {
  const nyTimesContext = useContext(NyTimesContext);
  const { setMoviesOnClick, toggleTheme, theme } = nyTimesContext;
  const body = document.getElementsByTagName('body');

  if (theme) {
    body[0].removeAttribute('class');
  } else {
    body[0].classList.add('dark-theme');
  }

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
          <li>
            <Link to="#" onClick={toggleTheme}>
              {theme ? (
                <i className="fas fa-moon" />
              ) : (
                <i className="fas fa-sun" />
              )}
            </Link>
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
