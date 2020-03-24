import React from 'react';
import ReviewList from './ReviewList.jsx'
import SearchBar from './SearchBar.jsx';
import RatingSummary from './RatingSummary.jsx';
import RatingSummary2 from './RatingSummary2.jsx';
import tempData from './tempData';

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            reviews: tempData.reviews,
            ratings: tempData.ratings.ratingSum,
            AvgRating: tempData.ratings.AvgRating
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.getReviews = this.getReviews.bind(this);
        this.getRelevantReviews = this.getRelevantReviews.bind(this);

    }
    
    // *****************************
    // Get Reviews 
    // *****************************
   

    handleSearch(searchTerm) {
        this.getRelevantReviews(searchTerm);
    }

    getRelevantReviews(searchTerm) {
        fetch(`http://localhost:3003/api/search?term=${searchTerm}`)
        .then(reviews => reviews.json())
        .then(reviews => {
            this.setState({reviews: reviews.reviews, ratings: reviews.ratings.ratingSum, AvgRating: reviews.ratings.AvgRating})
            })
        // .then(reviews => console.log(reviews))
        .catch(err => console.log(err))

    }

    getReviews() {

        fetch('http://localhost:3003/api/reviews')
        .then(reviews => reviews.json())
        .then(reviews => {
            console.log(reviews)
            this.setState({reviews: reviews.reviews, ratings: reviews.ratings.ratingSum, AvgRating: reviews.ratings.AvgRating})
            console.log("reviews:", this.state.reviews)
            
        })
        
        .catch(err => console.log(err))

    }

    // *****************************
    // life cycle methods
    // *****************************

    componentDidMount() {
        this.getReviews()
    }

    render(){
        console.log(this.state.ratings)
        return(
            <div>
                <h2>Reviews</h2>
                <SearchBar  avg={ this.state.AvgRating } handleSearch={ this.handleSearch }/>
                <div className='chartConatiner'>
                    <div className="chart">
                        <RatingSummary 
                        ratings={ this.state.ratings } 
                        location={Number(this.state.ratings.location_rating.sum)}
                        accuracy={Number(this.state.ratings.accuracy_rating.sum)}
                        cleanliness = {Number(this.state.ratings.cleanliness_rating.sum)}/>
                    </div>
                    <div className="chart"> 
                        <RatingSummary2 
                        ratings={ this.state.ratings } 
                        communication={Number(this.state.ratings.communication_rating.sum)} 
                        accuracy={Number(this.state.ratings.accuracy_rating.sum)}
                        Check_in={Number(this.state.ratings.Check_in_rating.sum)} />
                    </div>

                </div> 
                    <ReviewList reviews={ this.state.reviews }/>
            </div>
        )
    }
}

export default App;

