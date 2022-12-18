import React from "react";

const Card = () => {
  return (
    <div className="movie">
      <img
        src="https://marketplace.canva.com/EAFH4NHZv_8/1/0/1131w/canva-white-mystery-movie-poster-UfgB1AQbfvk.jpg"
        alt="poster"
      />

      <div className="movie-details">
        <div className="box">
            <h4 className="title">Title</h4>
            <h4 className="rating">Rating</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
