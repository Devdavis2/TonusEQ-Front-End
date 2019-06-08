import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class ArtistChart2 extends Component { 
constructor (props) {
    super(props)
    this.state = {
        chartData:{
            labels: [ 'Jay-z', 'Beyonce', 'Lil Nas X', 'Jimi Hendrex', 'Kanye West', 'Ariana Grande', 'Kings of Leon', 'Beastie Boys', 'Bruno Mars',],
            datasets:[
                {
                    label: 'Mood Duration',
                    data: [
                    5, 7, 5, 5, 4, 3, 4, 6, 6, 1,
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
    displayLegend: false,
    displayData: true,
}
 
render() {
    return(
        <div className="chart blue-grey lighten-2">
        <br></br>
        <h5 className="lime accent-2 "> Mood Duration by Artist</h5>
        <Bar 
            data={this.state.chartData}

            options={{ 
                title: {
                   display: this.props.displayTitle,
                   text:'Mood State of Music',
                   fontSize: 18
                },
            legend: {
                display: this.props.displayLegend,
                position: 'bottom',
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

export default ArtistChart2 