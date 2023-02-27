import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Heart from '../animated-components/Heart';

const FavouritesListItem = (props) => {

  function handleRemoveFromFavourites() {
    props.removeFavourite(props.movie);
  }


  const handleViewMovie = () => {
    // Implement view movie functionality
  };

  return (
    <div className="flex items-center py-4 justify-center" >
      <div className='group justify-start m-3 relative transition duration-200 hover:scale-[110%]'>
        
        <img className='shadow-2xl shadow-gray-900 rounded-md' src={`https://image.tmdb.org/t/p/w185${props.movie.poster}`} alt={`${props.movie.title} poster`} />
        <div className='flex absolute items-center justify-center bg-black/80 transition ease-in duration-200 w-full p-[20px] bottom-0 opacity-0 group-hover:opacity-100'>
          <button onClick={handleRemoveFromFavourites} className=" text-white font-bold py-2 px-4 bg-transparent">
            Remove from Favourites
          </button>
        </div>
      </div>

{/* <Heart movie={props.movie} removeFavourite={props.removeFavourite}/> selected={true} */}

    </div>


  );

}

export default FavouritesListItem;