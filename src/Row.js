import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Row.css";
import StarRateIcon from "@material-ui/icons/StarRate";
function Row({ title, fetchUrl, isLarge = false }) {
  const [movies, setMovies] = useState();

  const baseURL = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row-posters">
        {movies?.map((movie) => {
          if ((isLarge && movie.poster_path) || movie.backdrop_path) {
            return (
              <div className="poster-container">
                <img
                  className={`movieimg ${isLarge && "row-imglarge"}`}
                  key={movie.id}
                  src={`${baseURL}${
                    isLarge ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name || movie.title}
                />
                <span className="row-poster-rating">
                  {Array(Math.floor(movie.vote_average / 2))
                    .fill()
                    .map((_, i) => (
                      <StarRateIcon style={{color:'cyan'}} />
                    ))}
                </span>
              </div>
            );
          }
          console.log(movie);
        })}
      </div>
    </div>
  );
}

export default Row;
