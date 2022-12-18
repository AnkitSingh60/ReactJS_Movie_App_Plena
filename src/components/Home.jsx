/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Card from "./Card";

let API_KEY = "&api_key=9e547eaa8b83cf89de24b0885f9b31f5";
let BASE_URL = "https://api.themoviedb.org/3";
let URL = BASE_URL + "/discover/movie?sort_by=popularity.desc" + API_KEY;

let arr = ["Popular", "Theatre", "Kids", "Drama", "Comedy"];

const Home = () => {
  const [movieData, setMovieData] = useState([]);
  const [urlSet, setUrl] = useState(URL);
  const [search, setSearch] = useState("");

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
    if (type === "Popular") {
      URL = BASE_URL + "/discover/movie?sort_by=popularity.desc" + API_KEY;
    }
    if (type === "Theatre") {
      URL =
        BASE_URL +
        "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22" +
        API_KEY;
    }
    if (type === "Kids") {
      URL =
        BASE_URL +
        "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc" +
        API_KEY;
    }
    if (type === "Drama") {
      URL =
        BASE_URL +
        "/discover/movie?with_genres=18&primary_release_year=2014" +
        API_KEY;
    }
    if (type === "Comedy") {
      URL =
        BASE_URL +
        "/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc" +
        API_KEY;
    }

    setUrl(URL);
  };

  useEffect(() => {
    fetchMovies();
  }, [urlSet]);

  return (
    <>
      <div className="navbar">
        <nav>
          <ul>
            {arr.map((value,index) => {
              return (
                <li key={index}>
                  {" "}
                  <a 
                    href="#"
                    name={value}
                    onClick={(e) => {
                      filters(e.target.name);
                    }}
                  >
                    {value}
                  </a>{" "}
                </li>
              );
            })}
          </ul>
        </nav>

       <form action="">
       <div className="search">
          <input
            className="search_input"
            type="text"
            placeholder="Search movie here..."
            value={search}
            onChange={(e)=> setSearch(e.target.value)}
            onKeyPress={""}
            />
        </div>
       </form>
      </div>

      <div className="container">
        {movieData.length === 0 ? (
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
