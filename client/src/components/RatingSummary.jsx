import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

class RatingSummary extends React.Component {
    constructor (props) {
        super(props)
        this.location = 2
        this.accuracy = 2
        this.cleanliness = 2
        this.communication = 2
        this.value = 2
        this.Check_in = 2
        this.state = {
            data : {
    
                labels: ['Location', 'Checkin', 'Cleanliness', 'Communication', 'Accuracy', 'Value'],
                datasets: [
                    {
                        label: 'My First dataset',
                        type: 'horizontalBar',
                        backgroundColor: 'rgba(18, 132, 136, 1)',
                        borderColor: 'rgba(18, 132, 136, 1)',
                        borderWidth: 1,
                        maxBarThickness: 8,
                        showLines: false,
                        hoverBackgroundColor: 'rgba(18, 132, 136,0.4)',
                        hoverBorderColor: 'rgba(18, 132, 136 ,1)',
                        data: [this.accuracy, this.cleanliness, this.communication, this.value, this.Check_in, this.location]
                    }
                ]
            },
            reviews: this.props.reviews


        }
    }

    componentDidUpdate() {
    if(this.props.gotRatings) {

        this.location = Number(this.props.ratings.location_rating.sum);
        this.accuracy = Number(this.props.ratings.accuracy_rating.sum);
        this.cleanliness = Number(this.props.ratings.cleanliness_rating.sum);
        this.communication = Number(this.props.ratings.communication_rating.sum);
        this.value = Number(this.props.ratings.value_rating.sum);
        this.Check_in = Number(this.props.ratings.Check_in_rating.sum);

    }

    }
    
    render() {

            return (
          <div>
            <h2>Bar Example (custom size)</h2>
            <HorizontalBar
              data={this.state.data}
              width={100}
              height={50}
              line
              options={{
                maintainAspectRatio: false
              }}
            />
          </div>
        );
    }

}

export default RatingSummary