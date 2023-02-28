import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const MovieDetailsStar = (props) => {
  const roundedNumber = Math.floor(Math.ceil(props.ratings * 2) / 2);

  const StarList = () => {
    const wholeNum = Math.trunc(roundedNumber / 2);
    const decimalNum = roundedNumber % 2;
    let stars = [];
    console.log(roundedNumber, wholeNum, decimalNum);
    for (let i = 0; i <= 5; i++) {
      if (i < wholeNum) {
        stars.push(<BsStarFill />);
      }

      if (i > wholeNum) {
        if (i === wholeNum) {
          if (decimalNum >= 0.9) {
            stars.push(<BsStarHalf />);
          } else {
            stars.push(<BsStar />);
          }
        } else{
          stars.push(<BsStar />)
        }
      }
    }

    return stars;
  };

  return <div>{<StarList />}</div>;
};

export default MovieDetailsStar;
