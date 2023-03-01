import React, { useState } from 'react';
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

// Reference for the stars rating component 
// https://www.youtube.com/watch?v=eDw46GYAIDQ

const StarsRating = (props) => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);


    return (
        <div className='flex flex-row gap-1'>
            {[...Array(5)].map((star, i) => {
                const ratingVal = i + 1;

                return <label className={props.voted ? '-z-[10]' : 'z-1'}>
                    <input type="radio" 
                    disabled={props.voted}
                    name="rating" 
                    className='hidden' 
                    value={ratingVal} 
                    onClick={() => setRating(ratingVal)}></input>
                    <BsStarFill size={30} key={i} onMouseLeave={() => setHover(null)}
                    onMouseEnter={() => setHover(ratingVal)} className='hover:cursor-pointer' color={ratingVal <= (hover || rating) ? "#0f7ca7" : "#000000" }/>
                </label>
            })}
        </div>
    )
}

export default StarsRating;