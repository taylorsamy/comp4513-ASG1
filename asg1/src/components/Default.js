import React, { useEffect, useState } from 'react';
import MovieList from './MovieList.js';
import Navbar from './Navbar.js';
import MovieFilter from './MovieFilter.js';
import FavouritesList from './FavouritesList.js';


const Default = (props) => {


  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);

  function addFavourite(movie) {
    const favouritesCopy = [...favourites];
    // if movie is not in favourites, add it
    if (!favouritesCopy.some((m) => m.id === movie.id)) {
      favouritesCopy.push(movie);
      setFavourites(sortByTitle(favouritesCopy));
    }
  }

  function removeFavourite(movie) {
    const favouritesCopy = [...favourites];
    const index = favouritesCopy.indexOf(movie);
    favouritesCopy.splice(index, 1);
    setFavourites(sortByTitle(favouritesCopy));
    console.log(favourites);
  }

  useEffect(() => {
    setMovies(sortByTitle(props.movieData));
  }, [props.movieData]);


  // function to sort movies by title
  function sortByTitle(movies) {
    const movieCopy = [...movies];
    movieCopy.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
    return movieCopy;
  }




  function onFilterChange(filters) {
    const filteredMovies = props.movieData.filter((movie) => {
      let includeMovie = true;

      if (filters.title && !movie.title.toLowerCase().includes(filters.title.toLowerCase())) {
        includeMovie = false;
      }

      // if finters.genre is not empty and movie.details.genres is not empty and movie.details.genres.name does not include filters.genre.name
      if ((filters.genre && movie.details.genres === null) || (filters.genre && !movie.details.genres.some(genre => genre.name === filters.genre))) {
        
        includeMovie = false;
      }

      if (movie.details.genres === null && filters.genre === "" ) {
        includeMovie = true;
      }


      if ((filters.minYear) &&
        (parseInt(movie.release_date.substring(0,4)) < parseInt(filters.minYear))
      ) {
        includeMovie = false;
      }

      if ((filters.maxYear) &&
        (parseInt(movie.release_date.substring(0,4)) > parseInt(filters.maxYear))
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

    setMovies(sortByTitle(filteredMovies));
  }



  return (
    <div className="w-full h-[90vh]">
      <Navbar />
      <div class="grid grid-cols-4 gap-4">
        <div class="col-span-1 bg-gray-200 h-[90vh]">
          <MovieFilter onFilterChange={onFilterChange} movies={props.movieData} />
        </div>
        <div class="col-span-2 bg-gray-400 h-[90vh] ">
          <MovieList movies={movies} addFavourite={addFavourite} removeFavourite={removeFavourite} />

        </div>
        <div class="col-span-1 bg-gray-200 h-[90vh]">
          <FavouritesList favourites={favourites} removeFavourite={removeFavourite} />
        </div>
      </div>


    </div>
  )
}

export default Default;