import React from 'react';
import ReviewList from './ReviewList.jsx'
import SearchBar from './SearchBar.jsx';

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            reviews: []
        }

    }

    componentDidMount() {
        fetch('http://localhost:3000/api/reviews')
        .then(reviews => reviews.json())
        .then(reviews => {
            this.setState({ reviews })
        })
        
        .catch(err => console.log(err))

        
    }

    render(){
        return(
            <div>
                <h1>Testing Reviews</h1>
                <SearchBar reviews={ this.state.reviews }/>
                <ReviewList reviews={ this.state.reviews }/>
            </div>
        )
    }
}

export default App;