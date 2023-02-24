import React, { useEffect, useState } from 'react';
import MovieListItem from './MovieListItem';


const MovieList = (props) => {
  const movies = props.movies;



  return (
    <div className="w-full h-full overflow-y-auto">
      {/* for each movie in props.movies, create a MovieListItem and pass in the movie. populat them in order*/}

      <div className='content-center content-evenly '>

        {movies.map((movie) => {
          return <MovieListItem movie={movie} />
        })}
      </div>





    </div>
  )
}

export default MovieList;