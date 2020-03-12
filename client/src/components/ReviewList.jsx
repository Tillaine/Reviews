import React from 'react';
import Review from './Review.jsx'

const ReviewList = (props) => {
    console.log('reviews in list', props.reviews)
    return (<ul>
    {props.reviews.map(review =>{ 
        const { id } = review
        return <Review key={id} review={review}/>
        })}
</ul>

)
} 

export default ReviewList;
