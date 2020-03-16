import React from 'react';
import ReviewList from './ReviewList.jsx'
import SearchBar from './SearchBar.jsx';
import RatingSummary from './RatingSummary.jsx';

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            reviews: [],
            rating: []
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.getRatingData = this.getRatingData.bind(this);

    }
    // id, user_name, property_id, message, date_created, user_img_url, accuracy_rating, location_rating, cleanliness_rating, value_rating, communication_rating, Check_in_rating
    //aggregates rating data to display in ratingSummary chart
    getRatingData() {
        const ratingSum = {};
        this.state.reviews.forEach(review => {
            for(let category in review) {
                if(category.includes('rating')){
                    if(ratingSum[category] === undefined) {
                        ratingSum[category] = {all: [review[category]]};
                    } else {
                        ratingSum[category].all.push(review[category]) 
                    }
                }
        }
        })
        Object.keys(ratingSum).forEach(category => {
            const avg = ratingSum[category].all.reduce((total, num) => total + num)/ratingSum[category].all.length;
            ratingSum[category].sum = avg.toFixed(1);
        })
        console.log(ratingSum)
        //create a rating object 
        //loop through all reviews r
            //for each rating option 
            //if rateObj[rating] is undefined 
                //rateObj[rating] = [CurrentRating]
                // else 
                // rateObj[rating].push(currentRating) 
        //loop through object push average of all catergory Ratings to end of category array 
        //setState to update rating summary
    }

    handleSearch(searchTerm) {
        const options = {
            method: 'GET',

        }
        console.log('handlesubmit', searchTerm)
        fetch(`http://localhost:3000/api/search?term=${searchTerm}`)
        .then(reviews => reviews.json())
        .then(reviews => this.setState({ reviews }))
        // .then(reviews => console.log(reviews))
        .catch(err => console.log(err))
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/reviews')
        .then(reviews => reviews.json())
        .then(reviews => {
            this.setState({ reviews })
        })
        .then(() => this.getRatingData())
        
        .catch(err => console.log(err))

    }

    render(){
        return(
            <div>
                <h1>Testing Reviews</h1>
                <SearchBar handleSearch={ this.handleSearch } reviews={ this.state.reviews }/>
                <RatingSummary reviews={this.state.reviews}/>
                <ReviewList reviews={ this.state.reviews }/>
            </div>
        )
    }
}

export default App;