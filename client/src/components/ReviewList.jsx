import React from 'react';
import Review from './Review.jsx'
import images from './imgFiles'
var randomImage = () => images.imageIds[Math.floor(Math.random() * images.imageIds.length)];
console.log(randomImage())
const ReviewList = (props) => {
    return (<ul>
    {props.reviews.map(review =>{ 
        const { id } = review
        return <Review key={id} imageId={randomImage()} review={review}/>
        })}
</ul>)
} 

export default ReviewList;
