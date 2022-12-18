import React, { useEffect, useState } from 'react'
import Card from './Card'
import Navbar from './Navbar'

let API_KEY = "&api_key=9e547eaa8b83cf89de24b0885f9b31f5";
let BASE_URL = "https://api.themoviedb.org/3";
let URL = BASE_URL+"/discover/movie?sort_by=popularity.desc"+API_KEY;


const Home = () => {
    const [movieData, setMovieData] = useState([]);
    const [urlSet, setUrl] = useState(URL);

    const fetchMovies = async() => {
        let res = await fetch(urlSet);
        let result = await res.json();
        // console.log('result:', result.results);
        setMovieData(result.results)
    }

    useEffect(() => {
       fetchMovies();
    }, [urlSet])
    
  return (
    <>
    <Navbar />

    <div className="container">
        {
            (movieData.length == 0 ) ? <p>Movie Not found</p> : movieData.map((res,pos)=>{
                return(
                    <Card info={res} key={pos} />
                )
            })
        }
    </div>
    </>
  )
}

export default Home