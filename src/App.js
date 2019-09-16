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
    console.log(process.env);
    const res = await axios.get(
      `https://api.nytimes.com/svc/movies/v2/reviews/{type}.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`
    );
    console.log(res.data);
    this.setState({ movies: res.data.results, loading: false });
  }

  searchMovies = text => {
    console.log('App.js =>', text);
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
