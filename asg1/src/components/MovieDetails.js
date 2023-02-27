import React, { useState } from "react";
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

  return (
    <div className="w-full h-[100vh]">
      <Navbar />
      <div className='hidden'>
        <AiOutlineLeft />
      </div>
      
      <img
        src={backdrop}
        className="absolute w-full h-[100vh] -z-10 brightness-[0.25] blur-[20px] shadow-none backdrop-blur-sm"
      />
      <div className="grid md:grid-cols-2 min-h-[calc(100vh-70px)]">
        
        <div className="grid place-items-center">
        
          <img
            className="shadow-xl shadow-gray-900 rounded-md"
            src={img}
            alt="poster"
          />
        </div>
        <div className="mx-[50px] py-40 flex flex-col  gap-10 text-white">
          <div className="flex flex-row items-center gap-60">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold">Jarhead</p>
            <p className="md:text-2xl">6.6</p>
          </div>
          <div>
            <p>2005</p>

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
            
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-10">
              <p>Genre</p>
              <p>Drama, War</p>
            </div>
            <div className=" overflow-auto flex flex-row gap-10 items-center mt-5">
             <a href={imdbLink} className='w-[75px]' rel='noreferrer' target='_blank'><img src={IMDBLogo} alt="IMDB logo" /></a>
             <a href={tmdbLink} className='w-[75px]' rel='noreferrer' target='_blank'><img src={TMDBLogo} alt="TMDB logo" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
