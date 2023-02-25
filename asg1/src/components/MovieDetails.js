import React, { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "./Navbar";

const MovieDetails = (props) => {

  const [searchParms, setSearchParms] = useSearchParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // get movie id from url
    const id = searchParms.get("id");
    // find movie from props.movieData
    const movie = props.movieData.find((m) => m.id == id);
    // set movie
    setMovie(movie);
    console.log(movie);
  }, [props.movieData, searchParms]);



  return (
    <div className="w-full h-[93vh]">
      <Navbar />
      {console.log(movie)}
        {movie && <div>
          <img
        src={"https:image.tmdb.org/t/p/original"+movie.backdrop}
        className="absolute w-full h-[93vh] -z-10 brightness-[0.25] blur-[20px] shadow-none backdrop-blur-sm"
        alt="backdrop"
      />
      <div className="grid md:grid-cols-2 min-h-[calc(100vh-70px)]">
        <div className="grid place-items-center">
          <img
            className="shadow-xl shadow-gray-900 rounded-md"
            src={"https://image.tmdb.org/t/p/w500"+movie.poster}
            alt="poster"
          />
        </div>
        <div className="mx-[50px] py-40 flex flex-col  gap-10 text-white">
          <div className="flex flex-row items-center gap-60">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold">{movie.title}</p>
            <p className="md:text-2xl">{movie.ratings.average}</p>
          </div>
          <div className="flex flex-row content-evenly ">
            <p>{movie.release_date.substring(0,4)}</p>
            <p>{movie.runtime} mins</p>
          </div>
          <div className="flex flex-row">
            <p>Overview</p>
            <p>Details</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>
              {movie.details.overview}
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-10">
              <p>Genre</p>
              <p>Drama, War</p>
            </div>
            <div className="flex flex-row gap-10">
              <p>Genre</p>
              <p>Drama, War</p>
            </div>
            <div className=" overflow-auto flex flex-row gap-10">
              <a href={"https://www.imdb.com/title/" + movie.imdb_id} target="_blank" rel="noreferrer">
                TMDB Link
              </a>
              <p>TMDB link : {"https://www.themoviedb.org/movie/" + movie.tmdb_id}</p>
              <p>IMDB link : {"https://www.imdb.com/title/" + movie.imdb_id}</p>
            </div>
          </div>
        </div>
      </div> 
        </div>}
        
      </div>
  );
};

export default MovieDetails;
