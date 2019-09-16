import React, { Component } from 'react';

export class Search extends Component {
  state = {
    text: ''
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.searchMovies(this.state.text);
    this.setState({ text: '' });
    console.log(this.state.text);
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
