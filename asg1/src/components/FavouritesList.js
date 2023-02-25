import React, { useEffect, useState } from 'react';
import FavouritesListItem from './FavouritesListItem';


const FavouritesList = (props) => {
  const movies = props.favourites;


  return (
    <div className="w-full h-full overflow-y-auto">
      {/* for each movie in props.movies, create a MovieListItem and pass in the movie. populat them in order*/}

      <div className='content-center content-evenly '>

        {movies.map((movie) => {
          return <FavouritesListItem movie={movie} removeFavourite={props.removeFavourite} />
        })}
      </div>

    </div>
  )
}

export default FavouritesList;