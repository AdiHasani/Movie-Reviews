import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <p>Movie Reviews!</p>
      </div>
    </Fragment>
  );
}

export default App;
