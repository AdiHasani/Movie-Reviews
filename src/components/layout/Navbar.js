import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <div className="container">
        <h1>
          <i className={icon}></i> {title}
        </h1>
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
