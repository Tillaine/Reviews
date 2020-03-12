import React from 'react';
import ReviewList from './ReviewList.jsx'

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            reviews: []
        }

    }

    componentDidMount() {
    
    }

    render(){
        return(
            <div>
                <h1>Testing Reviews</h1>
                <ReviewList/>
            </div>
        )
    }
}

export default App;