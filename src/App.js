import React, { Component, Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Movies from './components/movies/Movies';
import './App.css';

let arr = [
  {
    display_title: 'Tall Girl',
    mpaa_rating: '',
    critics_pick: 0,
    byline: 'ELISABETH VINCENTELLI',
    headline: '‘Tall Girl’ Review: Struggling to Rise Above',
    summary_short:
      'Status anxiety reaches new heights in this unremarkable teen comedy.',
    publication_date: '2019-09-13',
    opening_date: '2019-09-13',
    date_updated: '2019-09-13 09:04:02',
    link: {
      type: 'article',
      url: 'http://www.nytimes.com/2019/09/13/movies/tall-girl-review.html',
      suggested_link_text: 'Read the New York Times Review of Tall Girl'
    },
    multimedia: {
      type: 'mediumThreeByTwo210',
      src:
        'https://static01.nyt.com/images/2019/09/13/arts/13tallgirl/13tallgirl-mediumThreeByTwo210.jpg',
      width: 210,
      height: 140
    }
  },
  {
    display_title: 'Ms. Purple',
    mpaa_rating: '',
    critics_pick: 1,
    byline: 'JEANNETTE CATSOULIS',
    headline:
      '‘Ms. Purple’ Review: The Ties That Bind (and Sometimes Strangle)',
    summary_short:
      'A moody, downbeat drama that occasionally offers glimmers of hope, Justin Chon’s film follows two Korean-American siblings struggling to reconnect while their father is dying.',
    publication_date: '2019-09-12',
    opening_date: '2019-09-06',
    date_updated: '2019-09-16 02:44:24',
    link: {
      type: 'article',
      url: 'http://www.nytimes.com/2019/09/12/movies/ms-purple-review.html',
      suggested_link_text: 'Read the New York Times Review of Ms. Purple'
    },
    multimedia: {
      type: 'mediumThreeByTwo210',
      src:
        'https://static01.nyt.com/images/2019/09/13/arts/12mspurple/merlin_160311948_613a24f6-0369-4315-927f-c3e062cfd690-mediumThreeByTwo210.jpg',
      width: 210,
      height: 140
    }
  },
  {
    display_title: 'América',
    mpaa_rating: '',
    critics_pick: 1,
    byline: 'GLENN KENNY',
    headline:
      '‘América’ Review: A Matriarch’s Illness Unites and Divides a Family',
    summary_short:
      'Filmed in Mexico, this tender and subtle documentary follows the struggles of three young men to care for their beloved aging grandmother.',
    publication_date: '2019-09-12',
    opening_date: '2019-09-13',
    date_updated: '2019-09-16 02:44:22',
    link: {
      type: 'article',
      url: 'http://www.nytimes.com/2019/09/12/movies/america-review.html',
      suggested_link_text: 'Read the New York Times Review of América'
    },
    multimedia: {
      type: 'mediumThreeByTwo210',
      src:
        'https://static01.nyt.com/images/2019/09/12/arts/12america/12america-mediumThreeByTwo210.jpg',
      width: 210,
      height: 140
    }
  }
];

class App extends Component {
  state = {
    movies: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });
    let moviesArr = arr;
    await this.wait(1500);
    this.setState({ movies: moviesArr, loading: false });
  }

  async wait(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <Movies loading={this.state.loading} movies={this.state.movies} />
        </div>
      </Fragment>
    );
  }
}

export default App;
