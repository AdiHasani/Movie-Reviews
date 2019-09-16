import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchMovies: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  onSubmit = event => {
    event.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter something', 'error');
    } else {
      this.props.searchMovies(this.state.text);
      this.setState({ text: '' });
    }
  };

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Movies"
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            className="btn btn-20 btn-search"
            type="submit"
            value="Search"
          />
        </form>
      </div>
    );
  }
}

export default Search;
