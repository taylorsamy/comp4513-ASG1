import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const MovieDetailsStar = (props) => {

  const roundedNumber = Math.floor(Math.ceil(props.ratings * 2) / 2);

  const StarList = () => {
    
    const wholeNum = roundedNumber / 2;
    const decimalNum = roundedNumber % 2;
    let stars = [];
    
    for(let i = 0; i < wholeNum; i++){
        stars.push(<BsStarFill />);
    }

    if(decimalNum >= 1){
        stars.push(<BsStarHalf />)
    } else {
        stars.push(<BsStar />)
    }
    
    console.log(stars);
    return stars;
  }

  return (
    <div>
      <StarList />
    </div>
  );
};

export default MovieDetailsStar;