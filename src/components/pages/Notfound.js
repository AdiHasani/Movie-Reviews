import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <div className="text-center">
      <h1>Page Not found</h1>
      <Link className="btn btn-back" to="/">
        Back to Home Page
      </Link>
    </div>
  );
};

export default Notfound;
