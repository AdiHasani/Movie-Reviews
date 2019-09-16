import React from 'react';

const MoviesItem = props => {
  const {
    display_title,
    headline,
    summary_short,
    multimedia,
    link
  } = props.movie;
  console.log(props);
  return (
    <div className="card">
      <img
        src={multimedia ? multimedia.src : 'no-img.png'}
        alt="IMG!"
        className="card-img"
      />
      <h2 className="movie-title text-center mb-1">{display_title}</h2>
      <h3>{headline}</h3>
      <p>{summary_short}</p>
      <a className="btn" href={link.url}>
        {link.suggested_link_text}
      </a>
    </div>
  );
};

export default MoviesItem;
