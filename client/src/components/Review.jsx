import React from 'react';

const Review = (props) => {
    const { user_name, date_created, message } = props.review;
    const formatDate = (date) => {
        return date.slice(0, 7)
    }
    return (
        <li>
            <h3 className={"userName"}> {user_name} </h3>
            <h5 className={"userName"}> {message} </h5>
            <h4 className={"userName"}> {formatDate(date_created)} </h4> 
        </li>
    )

}

export default Review;