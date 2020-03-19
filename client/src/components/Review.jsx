import React from 'react';

const Review = (props) => {
    const { user_name, date_created, message} = props.review;
    const formatDate = (date) => {
        return date.slice(0, 7)
    }
    return (
        <li>
            <div className='ReviewContainer'>

            <div className='reviewImg'>
                <img className="userImage" src={`https://i.picsum.photos/id/${props.imageId}/200/300.jpg`}/> 
            </div>
            <div className='reviewInfo'>
            <div className={"userName"}> {user_name} </div> 
            <div className={"date"}> {formatDate(date_created)} </div> 

            </div>

            </div>
            <h5 className='thin_review'> {message} </h5>
            <div className='reviewSpacer'>
            </div>
        </li>
    )

}

export default Review;




