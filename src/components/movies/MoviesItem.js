import React from 'react';

const MoviesItem = props => {
  const { display_title, summary_short, multimedia } = props.movie;
  console.log(props);
  return (
    <div className="card text-center">
      <img src={multimedia.src} alt="IMG!" className="card-img" />
      <h2>{display_title}</h2>
      <p>{summary_short}</p>
    </div>
  );
};

export default MoviesItem;
