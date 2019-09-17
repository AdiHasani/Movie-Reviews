import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import MovieReview from './components/movies/MovieReview';
import Notfound from './components/pages/Notfound';
import Snackbar from './components/layout/Snackbar';
import NyTimesState from './context/nytimes/NyTimesState';
import SnackbarState from './context/snackbar/SnackbarState';
import './App.css';

const App = () => {
  return (
    <NyTimesState>
      <SnackbarState>
        <Router>
          <Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/movie/:title" component={MovieReview} />
                <Route component={Notfound} />
              </Switch>
              <Snackbar />
            </div>
          </Fragment>
        </Router>
      </SnackbarState>
    </NyTimesState>
  );
};

export default App;
