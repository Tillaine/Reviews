import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

class RatingSummary2 extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            data : {
    
                labels: [`Communication ${this.props.communication}`, `Accuracy ${this.props.accuracy}`, `Value ${this.props.Check_in}`],
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
                        data: [this.props.communication, 
                                this.props.accuracy, 
                                this.props.Check_in]
                    }
                ]
               
            },
            reviews: this.props.reviews


        }
    }

    componentDidUpdate() {
    

    }
    
    render() {

            return (

          <div >
            <h4 className="barHeader">Bar Example (custom size)</h4>
            <HorizontalBar
              data={this.state.data}
              width={5}
              height={5}
              line
              options={{
                  title: {
                      display: false
                  },
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

export default RatingSummary2