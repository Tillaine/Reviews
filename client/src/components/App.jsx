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
            AvgRating: tempData.AvgRating
        }
        this.handleSearch = this.handleSearch.bind(this);

    }
    // id, user_name, property_id, message, date_created, user_img_url, accuracy_rating, location_rating, cleanliness_rating, value_rating, communication_rating, Check_in_rating
    //aggregates rating data to display in ratingSummary chart
    
   

    handleSearch(searchTerm) {
        console.log('handlesubmit', searchTerm)
        fetch(`http://localhost:3000/api/search?term=${searchTerm}`)
        .then(reviews => reviews.json())
        .then(reviews => {
            this.setState({reviews: reviews.reviews, ratings: reviews.ratings, AvgRating: reviews.ratings.AvgRating})
            console.log("reviews:", this.state.reviews)   
            })
        // .then(reviews => console.log(reviews))
        .catch(err => console.log(err))
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/reviews')
        .then(reviews => reviews.json())
        .then(reviews => {
            this.setState({reviews: reviews.reviews, ratings: reviews.ratings, AvgRating: reviews.ratings.AvgRating})
            console.log("reviews:", this.state.reviews)
            
        })
        
        .catch(err => console.log(err))

    }

    render(){
        console.log('state ratings', this.state.ratings)
        return(
            <div>
                <h1>Testing Reviews</h1>
                <SearchBar  avg={ this.state.AvgRating } handleSearch={ this.handleSearch } reviews={ this.state.reviews }/>
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