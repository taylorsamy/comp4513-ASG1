
import React, { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import Navbar from "./Navbar";
import { AiOutlineLeft } from 'react-icons/ai';
import MovieDetailsExtra from "./movie-details-components/MovieDetailsExtra";
import MovieDetailsRatings from "./movie-details-components/MovieDetailsRating";
import TMDBLogo from "./logos/TMDB.png";
import IMDBLogo from "./logos/IMDB.png";


const MovieDetails = (props) => {

  const img = "https://image.tmdb.org/t/p/w342/55WJCdayHwoXJwRv3prpqscHt2q.jpg";
  const backdrop =
    "https:image.tmdb.org/t/p/original/bQ8fRUaitJvi54O2lUT6Ta7FVHK.jpg";
  const tmdbLink = "https://www.themoviedb.org/movie/25";
  const imdbLink = "https://www.imdb.com/title/tt0418763";

  const [overview, setOverview] = useState(true);
  const [details, setDetails] = useState(false);
  const [ratings, setRatings] = useState(false);

  const handleOverview = () => {
    setOverview(true);
    setDetails(false);
    setRatings(false);
  }

  const handleDetails = () => {
    setDetails(true);
    setOverview(false);
    setRatings(false);
  }

  const handleRatings = () => {
    setRatings(true);
    setOverview(false);
    setDetails(false);
  }


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

      <div className='hidden'>
        <AiOutlineLeft />
      </div>

      <img
        src={backdrop}
        className="absolute w-full h-[100vh] -z-10 brightness-[0.25] blur-[20px] shadow-none backdrop-blur-sm"
      ></img>;
      {console.log(movie)}
      {movie &&
        <div>
          <img
            src={"https:image.tmdb.org/t/p/original" + movie.backdrop}
            className="absolute w-full h-[93vh] -z-10 brightness-[0.25] blur-[20px] shadow-none backdrop-blur-sm"
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
                <p className="md:text-5xl sm:text-4xl text-xl font-bold">{movie.title}</p>
                <p className="md:text-2xl">{movie.ratings.average}</p>
              </div>

              <div>
                <p>2005</p>


                <div className="flex flex-row content-evenly ">
                  <p>{movie.release_date.substring(0, 4)}</p>
                  <p>{movie.runtime} mins</p>

                </div>
                <div className="flex flex-row gap-40">
                  <p onClick={handleOverview}>Overview</p>
                  <p onClick={handleDetails}>Details</p>
                  <p onClick={handleRatings}>Ratings</p>
                </div>

                <div>
                  {overview === true && details === false && ratings === false && <p>
                    Jarhead is a film about a US Marine Anthony SwoffordÃ¢â¬Å¡ÃâÃÂ´s
                    experience in the Gulf War. After putting up with an arduous boot
                    camp, Swafford and his unit are sent to the Persian Gulf where
                    they are earger to fight but are forced to stay back from the
                    action. Meanwhile Swofford gets news of his girlfriend is cheating
                    on him. Desperately he wants to kill someone and finally put his
                    training to use.
                  </p>}

                  {details === true && overview === false && ratings === false &&
                    <MovieDetailsExtra />}

                  {ratings === true && overview === false && details === false &&
                    <MovieDetailsRatings />}


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

                    <div className=" overflow-auto flex flex-row gap-10 items-center mt-5">
                      <a href={imdbLink} className='w-[75px]' rel='noreferrer' target='_blank'><img src={IMDBLogo} alt="IMDB logo" /></a>
                      <a href={tmdbLink} className='w-[75px]' rel='noreferrer' target='_blank'><img src={TMDBLogo} alt="TMDB logo" /></a>

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
              </div>
            </div>
          </div>
        </div>
        }


        </div>
          );
};

      export default MovieDetails;
