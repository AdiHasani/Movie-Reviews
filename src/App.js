import React, { Component, Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Movies from './components/movies/Movies';
import Search from './components/movies/Search';
import Snackbar from './components/layout/Snackbar';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    movies: [],
    loading: false,
    alert: null
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.nytimes.com/svc/movies/v2/reviews/{type}.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`
    );
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

  snackbar = (message, type, ms = 3000) => {
    this.setState({ alert: { message, type } });
    setTimeout(() => this.setState({ alert: null }), ms);
    console.log(this.state.alert);
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <Search searchMovies={this.searchMovies} setAlert={this.snackbar} />
          <Movies loading={this.state.loading} movies={this.state.movies} />
          <Snackbar alert={this.state.alert} />
        </div>
      </Fragment>
    );
  }
}

export default App;
