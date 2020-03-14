import React from 'react';

const Review = (props) => {
    const { user_name, date_created, message} = props.review;
    const formatDate = (date) => {
        return date.slice(0, 7)
    }
    return (
        <li>
            <div>
                <img className="userImage" src={`https://i.picsum.photos/id/${props.imageId}/200/300.jpg`}/> <h3 className={"userName"}> {user_name} </h3> 
            </div>
            
            <h5 className='thin_review'> {message} </h5>
            <h4 className={"userName"}> {formatDate(date_created)} </h4> 
        </li>
    )

}

export default Review;




