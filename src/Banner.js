import axios from "./axios";
import React, { useState,useEffect } from "react";
import "./Banner.css";
import reqs from "./req";

function Banner() {
    const [movie, setMovie] = useState();

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(reqs.fetchActionMovies);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
      };
      fetchData();
      setInterval(() => fetchData(), 1 * 100 * 30);
    }, []);
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: 'center center'
      }}
    >
      <div className="banner-conteins">
              <h1 className="banner-title">{ movie?.name || movie?.title || movie?.original_name }</h1>
        <div className="banner-buttons">
          <button>Play</button>
          <button>My List</button>
        </div>
        <h1 className="banner-description">
          {truncate(movie?.overview,100)}
        </h1>
      </div>
      <div className="banner-fadebottom" />
    </header>
  );
}

export default Banner;
