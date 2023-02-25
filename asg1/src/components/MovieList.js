import React, { useEffect, useState } from 'react';
import MovieListItem from './MovieListItem';


const MovieList = (props) => {
  const movies = props.movies;


  return (
    <div className="w-full h-full overflow-y-auto">
      {/* for each movie in props.movies, create a MovieListItem and pass in the movie. populat them in order*/}

      <div className='content-center content-evenly '>
        {/* if no movies exist, display no movies found nicely */}
        {movies.length === 0 && <div className='flex flex-col items-center justify-center'>
          <p className='text-2xl'>No movies found</p>
          <p className='text-xl'>Try searching for something else</p>
        </div>}
        

        {movies.map((movie) => {
          return <MovieListItem movie={movie} addFavourite={props.addFavourite} removeFavourite={props.removeFavourite} />
        })}
      </div>

    </div>
  )
}

export default MovieList;