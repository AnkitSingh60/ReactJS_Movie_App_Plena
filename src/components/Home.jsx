import React, { useEffect, useState } from "react";
import Card from "./Card";

let API_KEY = "&api_key=9e547eaa8b83cf89de24b0885f9b31f5";
let BASE_URL = "https://api.themoviedb.org/3";
let URL = BASE_URL + "/discover/movie?sort_by=popularity.desc" + API_KEY;

let arr = ["Popular","Theatre","Kids","Drama","Comedy"]

const Home = () => {
  const [movieData, setMovieData] = useState([]);
  const [urlSet, setUrl] = useState(URL);

  const fetchMovies = async () => {
    try {
      let res = await fetch(urlSet);
      let result = await res.json();
      setMovieData(result.results);
    } catch (error) {
      console.log("error:", error);
    }
  };

  const filters = (type) => {
    if(type === "Popular"){
      // URL = 
    }
  }

  useEffect(() => {
    fetchMovies();
  }, [urlSet]);

  return (
    <>
       <div className="navbar">
        <nav>
        <ul>
            {
              arr.map((value) => {
                return (
                  <li> <a href="#" name={value} onClick={(e)=>{filters(e.target.name)}} >{value}</a> </li>
                )
              })
            }
            
        </ul>
        </nav>

    <div className="search">
    <input className="search_input" type="text"  placeholder="Search movie here..." />
    </div>
        
    </div>

      <div className="container">
        {movieData.length == 0 ? (
          <p>Movie Not found</p>
        ) : (
          movieData.map((res, pos) => {
            return <Card info={res} key={pos} />;
          })
        )}
      </div>
    </>
  );
};

export default Home;
