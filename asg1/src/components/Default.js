import React, { useEffect, useState } from 'react';
import MovieList from './MovieList.js';
import Navbar from './Navbar.js';
import MovieFilter from './MovieFilter.js';


const Default = (props) => {


  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const movieCopy = [...props.movieData];
    movieCopy.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
    setMovies(movieCopy);
  }, [props.movieData]);


  function onFilterChange(filters) {
    const filteredMovies = props.movieData.filter((movie) => {
      let includeMovie = true;

      if (filters.title && !movie.title.toLowerCase().includes(filters.title.toLowerCase())) {
        includeMovie = false;
      }

      // if finters.genre is not empty and movie.details.genres is not empty and movie.details.genres.name does not include filters.genre.name
      if ((movie.details.genres === null) || (filters.genre && !movie.details.genres.some(genre => genre.name === filters.genre))) {
        
        includeMovie = false;
      }

      if (movie.details.genres === null && filters.genre === "" ) {
        includeMovie = true;
      }


      // if (filters.genre && (movie.details.genres) !== filters.genre) {
      //   includeMovie = false;
      // }

      if ((filters.minYear) &&
        (movie.release_date < filters.minYear)
      ) {
        includeMovie = false;
      }

      if ((filters.maxYear) &&
        (movie.release_date > filters.maxYear)
      ) {
        includeMovie = false;
      }

      if (
        filters.minRating &&
        (movie.ratings.average < filters.minRating)
      ) {
        includeMovie = false;
      }

      if (filters.maxRating &&
        (movie.ratings.average > filters.maxRating)
      ) {
        includeMovie = false;
      }

      return includeMovie;
    });

    setMovies(filteredMovies);
  }



  return (
    <div className="w-full h-[95vh]">
      <Navbar />
      <div class="grid grid-cols-4 gap-4">
        <div class="col-span-1 bg-gray-200 h-[100vh]">
          <MovieFilter onFilterChange={onFilterChange} movies={props.movieData} />
        </div>
        <div class="col-span-2 bg-gray-400 h-[100vh] ">
          <MovieList movies={movies} />

        </div>
        <div class="col-span-1 bg-gray-200 h-[100vh]"></div>
      </div>


    </div>
  )
}

export default Default;