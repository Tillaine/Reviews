import React from 'react';
import ReviewList from './ReviewList.jsx'
import SearchBar from './SearchBar.jsx';
import RatingSummary from './RatingSummary.jsx';
import RatingSummary2 from './RatingSummary2.jsx';

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            reviews: [],
            ratings: {},
            gotRatings: false,
            AvgRating: 0
        }
        this.handleSearch = this.handleSearch.bind(this);
        // this.getRatingData = this.getRatingData.bind(this);

    }
    // id, user_name, property_id, message, date_created, user_img_url, accuracy_rating, location_rating, cleanliness_rating, value_rating, communication_rating, Check_in_rating
    //aggregates rating data to display in ratingSummary chart
    // getRatingData() {
    //     const ratingSum = {};
    //     this.state.reviews.forEach(review => {
    //         for(let category in review) {
    //             if(category.includes('rating')){
    //                 if(ratingSum[category] === undefined) {
    //                     ratingSum[category] = {all: [review[category]]};
    //                 } else {
    //                     ratingSum[category].all.push(review[category]) 
    //                 }
    //             }
    //     }
    //     })
    //     const rateSumArray = Object.keys(ratingSum).map(category => {
    //         const avg = (ratingSum[category].all.reduce((total, num) => 
    //         total + num)/ratingSum[category].all.length).toFixed(1);
    //         ratingSum[category].sum = avg;
    //         return avg
    //     })
    //     this.setState({
    //         AvgRating: (rateSumArray.reduce((total, rate) => { 
    //             return Number(total) + Number(rate)})/rateSumArray.length).toFixed(1), 
    //         ratings: ratingSum,
    //         gotRatings: true

    //     })

    // }

    handleSearch(searchTerm) {
        const options = {
            method: 'GET',

        }
        console.log('handlesubmit', searchTerm)
        fetch(`http://localhost:3000/api/search?term=${searchTerm}`)
        .then(reviews => reviews.json())
        .then(reviews => console.log("reviews:", reviews))
        // .then(reviews => console.log(reviews))
        .catch(err => console.log(err))
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/reviews')
        .then(reviews => reviews.json())
        .then(reviews => {
            console.log("reviews:", reviews)
            this.setState({reviews, ratings, AvgRating: reviews.ratings.sum})
            
        })
        
        .catch(err => console.log(err))

    }

    render(){
        return(
            <div>
                <h1>Testing Reviews</h1>
                <SearchBar handleSearch={ this.handleSearch } reviews={ this.state.reviews }/>
                <div className='chartConatiner'>
                    <div className="chart">
                        <RatingSummary ratings={ this.state.ratings } avg={ this.state.AvgRating } gotRatings={ this.state.gotRatings }/>
                    </div>
                    <div className="chart"> 
                        <RatingSummary2 ratings={ this.state.ratings } avg={ this.state.AvgRating } gotRatings={ this.state.gotRatings }/>
                    </div>

                </div> */}
                <ReviewList reviews={ this.state.reviews }/>
            </div>
        )
    }
}

export default App;