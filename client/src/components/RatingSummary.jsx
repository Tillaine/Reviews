import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';



class RatingSummary extends React.Component {
    constructor (props) {
        super(props)
        this.state = {



        }
    }

    
    render() {

      const data = {
    
            labels: [`Location ${this.props.location}`, `Accuracy ${this.props.accuracy}`, `Cleanliness ${this.props.cleanliness}`],
            datasets: [
                {
                    label: 'My First dataset',
                    type: 'horizontalBar',
                    backgroundColor: 'rgba(18, 132, 136, 1)',
                    borderColor: 'rgba(18, 132, 136, 1)',
                    borderWidth: 1,
                    maxBarThickness: 8,
                    hoverBackgroundColor: 'rgba(18, 132, 136,0.4)',
                    hoverBorderColor: 'rgba(18, 132, 136 ,1)',
                    data: [this.props.location, this.props.accuracy, this.props.cleanliness]
                }
            ]
           
        }

            return (
               

          <div >
            <h4 className="barHeader">Bar Example (custom size)</h4>
            <HorizontalBar
              data={data}
              width={5}
              height={5}
              options={{
                legend: false,
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

export default RatingSummary


