import React, { Fragment } from 'react';
import Search from '../movies/Search';
import Movies from '../movies/Movies';

const Home = () => (
  <Fragment>
    <Search />
    <Movies />
  </Fragment>
);

export default Home;
