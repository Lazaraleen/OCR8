import React from "react";
import staractive from '../assets/images/star-active.png';
import starinactive from '../assets/images/star-inactive.png';

// Vérifier cette histoire de props !!!
function RatingStars(props) {
const rating = props.props;
console.log(props.props);
return (  <span className="star">
                <img src={staractive}  alt="star" />  
                <img src={rating >= 2 ? staractive : starinactive} alt="star" />
                <img src={rating >= 3 ? staractive : starinactive} alt="star" />
                <img src={rating >= 4 ? staractive : starinactive} alt="star" />
                <img src={rating >= 5 ? staractive : starinactive} alt="star" />
            </span>)
}

export default RatingStars;