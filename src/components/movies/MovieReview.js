import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';

export class MovieReview extends Component {
  componentDidMount() {
    this.props.getMovie(this.props.match.params.title);
  }

  static propTypes = {
    movie: PropTypes.object,
    getMovie: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
  };
  render() {
    if (!this.props.movie) {
      return <Redirect to="/" />;
    }

    const {
      display_title,
      critics_pick,
      link,
      multimedia,
      publication_date,
      date_updated,
      headline,
      summary_short
    } = this.props.movie;
    const { loading } = this.props;

    if (loading)
      return (
        <div className="text-center">
          <Spinner />
        </div>
      );

    return (
      <Fragment>
        <div className="card grid-2 mb-2">
          <div className="text-center">
            <img
              src={multimedia ? multimedia.src : 'no-img.png'}
              alt="Sceen from movie"
              className="img-review"
            />
            <h2 className="text-red">{display_title}</h2>
          </div>
          <div>
            <h2>{headline}</h2>
            <h5>published: {publication_date}</h5>
            <h5 className="mb-2 text-red">edited: {date_updated}</h5>
            <p className="mb-3">{summary_short}</p>
            {link && (
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-more mb-1"
              >
                Read more <i className="fas fa-external-link-alt"></i>
              </a>
            )}
          </div>
        </div>
        <div className="review-footer">
          <Link to="/" className="btn btn-back">
            Back
          </Link>
          <div>
            Critics pick:{' '}
            {critics_pick === 1 ? (
              <i className="fas fa-check text-green" />
            ) : (
              <i className="fas fa-times-circle text-red" />
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default MovieReview;
