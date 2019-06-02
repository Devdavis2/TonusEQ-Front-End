import React, { Component } from 'react';
import Chart from 'chart.js'

// fetch('/tonus_eqs')
// .then(response => response.json())
// .then(json => console.log(json))
// .catch(err => console.log(err))

class BarChart extends Component {
    componentDidMount () {
        this.getData()
    }

    getData() {
        fetch('/tonus_eqs')
        .then(response => response.json())
        // .then(json => console.log(json))
        // .catch(err => console.log(err))
        .then(jData => this.preparedData(jData))  
        .then(data => this.createChart(data))
    }

    createChart(data) {
        const ctx = document.querySelector('#moods')
        console.log(ctx);
        const moodsChart = new Chart(ctx, {
            type: 'bar',
            data: data
        })
    }

    preparedData (data) {
        const chartData = {
            labels: [],
            datasets: [
                {
                    label: '',
                    data: [],
                    fill: false,
                    lineTension: 0,
                },

            ]
        }

    // START OF FOR LOOP
    data.forEach( (genre, i) => {
        console.log(data);
    // MUSIC CHART LABEL
    chartData.datasets[i].label = genre


    // START OF NESTED LOOP (MOOD DATA)
    genre.moods.forEach((moods, j) => {
    chartData.labels.push(moods.mood_state)
    
    chartData.datasets[i].data.push(moods.mood_state)

    })
    })

    return chartData;

}

  render () {
    return (
      <>
        <h1>Tonus Mood EQ</h1>
        <canvas id="moods" width="300" height="100"></canvas>
      </>
    )
  }
}

export default BarChart;
