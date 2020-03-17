import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

class RatingSummary2 extends React.Component {
    constructor (props) {
        super(props)
        this.communication = 2
        this.value = 2
        this.Check_in = 2
        this.state = {
            data : {
    
                labels: ['Communication', 'Accuracy', 'Value'],
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
                        data: [this.value, this.Check_in, this.Check_in]
                    }
                ]
               
            },
            reviews: this.props.reviews


        }
    }

    componentDidUpdate() {
    if(this.props.gotRatings) {

        this.communication = Number(this.props.ratings.communication_rating.sum);
        this.value = Number(this.props.ratings.value_rating.sum);
        this.Check_in = Number(this.props.ratings.Check_in_rating.sum);

    }

    }
    
    render() {

            return (

          <div >
            <h2>Bar Example (custom size)</h2>
            <HorizontalBar
              data={this.state.data}
              width={50}
              height={5}
              line
              options={{
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        display: false,
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
        );
    }

}

export default RatingSummary2