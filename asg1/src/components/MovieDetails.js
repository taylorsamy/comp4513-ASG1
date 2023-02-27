import React, { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import Navbar from "./Navbar";
import { AiOutlineLeft } from "react-icons/ai";
import MovieDetailsExtra from "./movie-details-components/MovieDetailsExtra";
import MovieDetailsRatings from "./movie-details-components/MovieDetailsRating";
import TMDBLogo from "./logos/TMDB.png";
import IMDBLogo from "./logos/IMDB.png";

const MovieDetails = (props) => {
  const tmdbLink = `https://www.themoviedb.org/movie/`;
  const imdbLink = `https://www.imdb.com/title/`;

  const [overview, setOverview] = useState(true);
  const [details, setDetails] = useState(false);
  const [ratings, setRatings] = useState(false);

  const handleOverview = () => {
    setOverview(true);
    setDetails(false);
    setRatings(false);
  };

  const handleDetails = () => {
    setDetails(true);
    setOverview(false);
    setRatings(false);
  };

  const handleRatings = () => {
    setRatings(true);
    setOverview(false);
    setDetails(false);
  };

  const [searchParms, setSearchParms] = useSearchParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // get movie id from url
    const id = searchParms.get("id");
    // find movie from props.movieData
    const movie = props.movieData.find((m) => m.id == id);
    // set movie
    setMovie(movie);
  }, [props.movieData, searchParms]);

  return (
    <div className="w-full h-[93vh]">
      <Navbar />
      <div className="hidden">
        <AiOutlineLeft />
      </div>

      {movie && (
        <div>
          <img
            src={"https:image.tmdb.org/t/p/original" + movie.backdrop}
            className="absolute w-full h-[100vh] -z-10 brightness-[0.50] blur-[20px] shadow-none backdrop-blur-sm"
            alt="backdrop"
          ></img>

          <div className="grid md:grid-cols-2 min-h-[calc(100vh-70px)]">
            <div className="grid place-items-center">
              <img
                className="shadow-xl shadow-gray-900 rounded-md"
                src={"https://image.tmdb.org/t/p/w500" + movie.poster}
                alt="poster"
              />
            </div>
            <div className="mx-[50px] py-40 flex flex-col  gap-10 text-white">
              <div className="flex flex-row items-center gap-60">
                <p className="md:text-5xl sm:text-4xl text-xl font-bold">
                  {movie.title}
                </p>
                <p className="md:text-2xl">{movie.ratings.average}</p>
              </div>
              <div className="flex flex-row gap-5">
                {movie.details.genres.map((genre) => {
                  return (
                    <p className="border-solid text-center px-[10px] rounded-lg bg-[#0f7ca7]">
                      {genre.name}
                    </p>
                  );
                })}
              </div>

              <div className="flex flex-col gap-10">
                <div className="grid grid-cols-2 ">
                  <p>{movie.release_date.substring(0, 4)}</p>
                  <p>{movie.runtime} mins</p>
                </div>
                <div className="flex flex-row gap-40">
                  <button
                    className="bg-transparent border-b-2 border-gray py-2 mr-3 px-2 leading-tight outline-none hover:border-[#0f7ca7] focus:text-[#52bee9] focus:border-[#0f7ca7]  duration-300"
                    onClick={handleOverview}
                  >
                    Overview
                  </button>
                  <button
                    className="bg-transparent border-b-2 border-gray py-2 mr-3 px-2 leading-tight outline-none hover:border-[#0f7ca7] focus:text-[#52bee9] focus:border-[#0f7ca7]  duration-300"
                    onClick={handleDetails}
                  >
                    Details
                  </button>
                  <button
                    className="bg-transparent border-b-2 border-gray py-2 mr-3 px-2 leading-tight outline-none hover:border-[#0f7ca7] focus:text-[#52bee9] focus:border-[#0f7ca7] duration-300"
                    onClick={handleRatings}
                  >
                    Ratings
                  </button>
                </div>

                <div className="flex flex-col gap-10">
                  {overview === true &&
                    details === false &&
                    ratings === false && <p>{movie.details.overview}</p>}

                  {details === true &&
                    overview === false &&
                    ratings === false && <MovieDetailsExtra movie={movie} />}

                  {ratings === true &&
                    overview === false &&
                    details === false && <MovieDetailsRatings movie={movie} />}

                  <div className="flex flex-col gap-5">
                    <div className=" overflow-auto flex flex-row gap-10 items-center mt-5">
                      <a
                        href={imdbLink + movie.imdb_id}
                        className="w-[75px]"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <img src={IMDBLogo} alt="IMDB logo" />
                      </a>
                      <a
                        href={tmdbLink + movie.tmdb_id}
                        className="w-[75px]"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <img src={TMDBLogo} alt="TMDB logo" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
