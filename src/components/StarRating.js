/**
 * StarRating.js
 */

import React, {useState} from "react";
import { FaStar } from "react-icons/fa";
import Star from "./Star";

// 길이가 length인 배열을 생성하여 반환
const createArray = length => [...Array(length)];

// 전달된 길이의 배열을 생성하고 배열의 모든 요소를 <Star />로 변환
const StarRating = function( { totalStars = 5 }) {
    const [selectedStars, setSelectedStars] = useState(3);

    return (
        <>
            {createArray(totalStars).map( (n, i) => (
                <Star 
                    key={i}
                    selected={selectedStars > i}
                /> )) }
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </>
    );
}

export default StarRating;