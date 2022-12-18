import React from "react";

const Card = (movie) => {
    let {info} = movie;
    // console.log('info:', info)
    let img_url = "https://image.tmdb.org/t/p/w500";
  return (
    <>
        <div className="movie">
      <img className="image"
        src={img_url+info.poster_path}
        alt={info.title}
      />

      <div className="movie-details">
        <div className="box">
          <h4 className="title"> {info.title.slice(0,18).toUpperCase()+" . ."}</h4>    
          <h4 className="title"> {info.vote_average}</h4>
        </div>
        <div className="overview">
            <p className="title">overview</p>
            {info.overview.slice(0,50)+"..."}
        </div>
      </div>
    </div>
    </>
  );
};

export default Card;
