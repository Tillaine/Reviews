import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

class RatingSummary extends React.Component {
    constructor (props) {
        super(props)
        this.location = 2
        this.accuracy = 2
        this.cleanliness = 2
        
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
                        gridLines: {
                            display:false,
                            drawBorder: false
                        },
                        hoverBackgroundColor: 'rgba(18, 132, 136,0.4)',
                        hoverBorderColor: 'rgba(18, 132, 136 ,1)',
                        data: [this.accuracy, this.cleanliness, this.communication]
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

    }

    }
    
    render() {

            return (
                <div className={"chartConatiner"}>

          <div className={'chart'}>
            <h2>Bar Example (custom size)</h2>
            <HorizontalBar
              data={this.state.data}
              width={100}
              height={50}
              line
              options={{
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        gridLines: {
                            display:false
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display:false
                        }   
                    }]
                }
              }}
            />
          </div>
                </div>
        );
    }

}

export default RatingSummary