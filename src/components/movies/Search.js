import React, { useState, useContext } from 'react';
import NyTimesContext from '../../context/nytimes/nyTimesContext';
import SnackbarContext from '../../context/snackbar/snackbarContext';

const Search = () => {
  const nyTimesContext = useContext(NyTimesContext);
  const snackbarContext = useContext(SnackbarContext);

  const [text, setText] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    if (text === '') {
      snackbarContext.snackbar('Please enter a query', 'error');
    } else {
      nyTimesContext.searchMovies(text);
      setText('');
    }
  };

  if (nyTimesContext.noResult) {
    snackbarContext.snackbar(
      'No Results Found, try to search for something else',
      'success',
      4000
    );
    nyTimesContext.removeNoResult();
  }

  const onChange = event => setText(event.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Movies"
          value={text}
          onChange={onChange}
        />
        <input className="btn btn-20 btn-search" type="submit" value="Search" />
      </form>
    </div>
  );
};

export default Search;
