import React, { useEffect, useState } from 'react';
import FavouritesListItem from './FavouritesListItem';


const FavouritesList = (props) => {
  const movies = props.favourites;

  


  return (
    <div className="w-full h-full">
      {/* for each movie in props.movies, create a MovieListItem and pass in the movie. populat them in order*/}

      <div className='content-center content-evenly'>
        <h1 className="text-2xl mt-3 text-center">Favourites</h1>

        {/* if no movies exist, display no movies found nicely */}
        {movies.length === 0 && <div className='flex flex-col items-center justify-center mt-5'>
          <p className='text-2xl'>No favourites yet!</p>
          <p className='text-xl'>Try adding a movie!</p>
        </div>}

        { movies.map((movie) => {
          
            return <FavouritesListItem movie={movie} removeFavourite={props.removeFavourite} />

        })}
      </div>

    </div>
  )
}

export default FavouritesList;