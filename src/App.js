import React, { Component, Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Movies from './components/movies/Movies';
import Search from './components/movies/Search';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    movies: [],
    loading: false
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
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <Search searchMovies={this.searchMovies} />
          <Movies loading={this.state.loading} movies={this.state.movies} />
        </div>
      </Fragment>
    );
  }
}

export default App;
