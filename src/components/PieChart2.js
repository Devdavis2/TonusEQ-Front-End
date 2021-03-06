import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

class PieChart2 extends Component { 
constructor (props) {
    super(props)
    this.state = {
        chartData:{
            labels: [ 'Excited', 'Relaxed/Chill', 'Focused', 'Stress', 'Sad'],
            datasets:[
                {
                    label: 'Moods',
                    data: [
                        15.0,
                        14.0,
                        13.0,
                        5.0,
                        3.0
                    ],
                backgroundColor:[
                    `rgb(238, 255, 65)`,
                    'rgb(216, 67, 21)',
                    'rgb( 41, 98, 255)',
                    'rgb(213, 0, 0)',
                    'rgb(197, 17, 98)',
                ] 
                
                }
            ]
        }
    }
}

static defaultProps ={
    displayTitle: false,
    displayLegend: true,
    displayData: true,
}
 
render() {
    return(
        <div className="chart ">
        <br></br>
        <h5 className="lime accent-2 "> Mood State Breakdown</h5>
        <Doughnut 
            data={this.state.chartData}

            options={{ 
                title: {
                   display: this.props.displayTitle,
                   text:'Mood State of Music',
                   fontSize: 18
                },
            legend: {
                display: this.props.displayLegend,
                position: 'left',
            },
            data: {
                display: this.props.displayData,
                text:'',
            }
            }}
            />
            <br></br>
        </div>
    )
}
}

export default PieChart2