import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Movies from './components/movies/Movies';
import MovieReview from './components/movies/MovieReview';
import Search from './components/movies/Search';
import Snackbar from './components/layout/Snackbar';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    movies: [],
    movie: {},
    loading: false,
    alert: null
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.nytimes.com/svc/movies/v2/reviews/{type}.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`
    );
    console.log(res.data.results);
    this.setState({ movies: res.data.results, loading: false });
  }

  searchMovies = async text => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.nytimes.com/svc/movies/v2//reviews/search.json?query=${text}&api-key=${process.env.REACT_APP_NYT_API_KEY}`
    );

    this.setState({ movies: res.data.results, loading: false });

    if (res.data.results.length === 0) {
      this.snackbar('No results found', 'success', 4000);
    }
  };

  getMovie = title => {
    console.log(title);
    let movie = this.state.movies.filter(
      movie => movie.display_title === title
    );
    this.setState({ movie: movie[0] });
    console.log(movie[0]);
  };

  snackbar = (message, type, ms = 3000) => {
    this.setState({ alert: { message, type } });
    setTimeout(() => this.setState({ alert: null }), ms);
  };

  render() {
    const { movies, movie, alert, loading } = this.state;
    return (
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search
                      searchMovies={this.searchMovies}
                      setAlert={this.snackbar}
                    />
                    <Movies loading={loading} movies={movies} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/movie/:title"
                render={props => (
                  <MovieReview
                    {...props}
                    getMovie={this.getMovie}
                    movie={movie}
                  />
                )}
              />
            </Switch>
            <Snackbar alert={alert} />
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default App;
