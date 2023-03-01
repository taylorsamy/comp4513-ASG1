import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const MovieDetailsStar = (props) => {
  const roundedNumber = Math.floor(Math.ceil(props.ratings * 2) / 2);
  
  const StarList = () => {
    const wholeNum = Math.trunc(roundedNumber / 2);
    const decimalNum = roundedNumber % 2;
    let stars = [];

    for (let i = 0; i <= 4; i++) {
      if (i < wholeNum) {
        stars.push(<BsStarFill size={30} key={i} color='#0f7ca7' />);
      }

      if (i >= wholeNum) {
        if (i === wholeNum) {
          if (decimalNum >= 1.0) {
            stars.push(<BsStarHalf size={30} key={i} color='#0f7ca7'/>);
          } else {
            stars.push(<BsStar size={30} key={i} color='#0f7ca7' />);
          }
        } else{
          stars.push(<BsStar size={30} key={i} color='#0f7ca7' />);
        }
      }
    }

    return stars;
  };

  return <div className='flex flex-row'>{<StarList />}</div>;
};

export default MovieDetailsStar;
