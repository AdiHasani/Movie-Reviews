import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export class MovieReview extends Component {
  componentDidMount() {
    this.props.getMovie(this.props.match.params.title);
  }

  static propTypes = {
    movie: PropTypes.object.isRequired,
    getMovie: PropTypes.func.isRequired
  };
  render() {
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
    return (
      <Fragment>
        <Link to="/" className="btn btn-back">
          Back
        </Link>
        Critics pick:{' '}
        {critics_pick === 1 ? (
          <i className="fas fa-check" />
        ) : (
          <i className="fas fa-times-circle" />
        )}
        <div className="card grid-2">
          <div className="text-center">
            <img
              src={multimedia ? multimedia.src : 'no-img.png'}
              alt="Sceen from movie"
              className="img-review"
            />
            <h2>{display_title}</h2>
          </div>
          <div>
            <h2>{headline}</h2>
            <h5>published: {publication_date}</h5>
            <h5 className="mb-2">edited: {date_updated}</h5>
            <p className="mb-3">{summary_short}</p>
            {link && (
              <a href={link.url} target="_blank" className="btn btn-more">
                Read more <i className="fas fa-external-link-alt"></i>
              </a>
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default MovieReview;
