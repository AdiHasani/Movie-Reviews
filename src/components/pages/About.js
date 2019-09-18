import React from 'react';

const About = () => {
  return (
    <div>
      <h2>About the Movie Reviews</h2>
      <p className="text-grey">version: 1.0.0</p>
      <p>
        This is a simple movie reviews app based on{' '}
        <strong className="text-grey">New York Times Developers API</strong>, in
        the home page, it shows the latest 20 movies that are reviewed and also
        there is search functionality that brings back a maximum of 20 movies
        that includes your search query.
      </p>
      <p>
        When you search you can go back to the lates reviews by clicking the
        name of the app in the upper left corner, and{' '}
        <strong className="text-red">Home</strong> link can be used as go to top
        button if you are in the list of movies scrolled to bottom and also as a
        back button if you are in the movie review page.
      </p>
      <p>
        The link <strong className="text-red">Read more</strong> in movie review
        page will send you to the full review that is external page hosted by{' '}
        <em className="text-grey">The New York Times</em>.
      </p>
    </div>
  );
};

export default About;
