import React from 'react';
import Review from './Review.jsx'
import images from './imgFiles'

var randomImage = () => images.imageIds[Math.floor(Math.random() * images.imageIds.length)];
const ReviewList = (props) => {
    const reviewSets = [];


    return (
    <div>

    <ul>
    {props.reviews.map(review =>{ 
        const { id } = review
        return <Review key={id} imageId={randomImage()} review={review}/>
        })}
</ul>
<div className='reviewNav'> 
        <ul className='pagination'>
            <li>
                <button> 2 </button>
            </li>
        </ul>

</div>
    </div>
)
} 

const splitReviews = (reviews) => {

}

export default ReviewList;
