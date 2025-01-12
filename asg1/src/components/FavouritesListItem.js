import React, { useState } from 'react';
import { AiFillHeart } from "react-icons/ai";

import { Link } from 'react-router-dom';
import Heart from '../animated-components/Heart';
import { useNavigate } from 'react-router-dom';

const FavouritesListItem = (props) => {

  const navigate = useNavigate();

  // function handleRemoveFromFavourites() {
  //   props.removeFavourite(props.movie);
  // }

  const toggleFavourite = () => {
    if (props.isFavourite){
      props.removeFavourite(props.movie);
      console.log('removed');
    }
    else {
      props.addFavourite(props.movie);
      console.log('added');
    }
    
    }

  const handleViewMovie = () => {
    navigate(`/movieDetails?id=${props.movie.id}`);
  };

  return (
    <div className="flex items-center py-4 justify-center" >
      <div className='group justify-start m-3 relative transition duration-200 hover:scale-[110%]'>
        
        <img onClick={handleViewMovie} className='shadow-2xl shadow-gray-900 rounded-md' src={`https://image.tmdb.org/t/p/w185${props.movie.poster}`} alt={`${props.movie.title} poster`} />
        {/* <div className='flex absolute items-center rounded-md justify-center bg-black/80 transition ease-in duration-200 w-full p-[20px] bottom-0 opacity-0 group-hover:opacity-100'> */}
        <div className='absolute top-5 right-5 hover:scale-[110%]' onClick={toggleFavourite}>
            {/* <Heart movie={props.movie} addFavourite={props.addFavourite} removeFavourite={props.removeFavourite} selected={props.isFavourite} /> */}
            {props.isFavourite && <AiFillHeart color='red' size={30} />}
            {!props.isFavourite && <AiFillHeart color='white' size={30} />}

          </div>
        {/* </div> */}
      </div>

{/* <Heart movie={props.movie} removeFavourite={props.removeFavourite}/> selected={true} */}

    </div>


  );

}

export default FavouritesListItem;