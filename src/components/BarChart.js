import React, { Component } from 'react';
import Chart from 'chart.js'



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
 
        const moodsChart = new Chart(ctx, {
            type: 'bar',
            data: data
        })
    }

    preparedData (data) {
        const chartData = {
            labels: [],
            datasets: [],
            
        }

        var option = {
            scales: {
                yAxis:[{
                    stacked: true
                }]
            }
        }

        const obj = {};
    
        // MOOD STATES
    obj.relaxed = {
        label: '',
        data: 0
        
    }
    obj.excited = {
        label: '',
        data: 0
    }
        obj.stress = {
        label: '',
        data: 0
    }
        obj.creative = {
        label: '',
        data: 0   
    }
        obj.sad = {
        label: '',
        data: 0    
    }
    obj.focused = {
        label: '',
        data: 0    
    }

        // window.onload = function(){
        //     var ctx = document.getElementById("canvas").getContext("2d");
        //     window.myBar = new Chart(ctx).Bar(chartData, {
        //         responsive : true
        //     });
        // }

    // START OF FOR LOOP
    data.forEach( (genre, i) => {
        // obj.label = genre.genre
        // obj.data = genre.moods

        if (genre.moods[0].mood_state === "Relaxed/Chill") {
           obj.relaxed.label = genre.moods[0].mood_state
           obj.relaxed.data += genre.moods[0].mood_duration
           
        }
        else if (genre.moods[0].mood_state === "Excited") {
            obj.excited.label = genre.moods[0].mood_state
            obj.excited.data += genre.moods[0].mood_duration
         }
         else if (genre.moods[0].mood_state === "Stress") {
            obj.stress.label = genre.moods[0].mood_state
            obj.stress.data += genre.moods[0].mood_duration
         }
         else if (genre.moods[0].mood_state === "Creative") {
            obj.creative.label = genre.moods[0].mood_state
            obj.creative.data += genre.moods[0].mood_duration
         }     
         else if (genre.moods[0].mood_state === "Sad") {
            obj.sad.label = genre.moods[0].mood_state
            obj.sad.data += genre.moods[0].mood_duration
         }

         else if (genre.moods[0].mood_state === "Focused") {
            obj.creative.label = genre.moods[0].mood_state
            obj.creative.data += genre.moods[0].mood_duration
        }
        //  console.log(obj.sad);
    
    // MUSIC CHART LABEL
    // chartData.datasets.obj.label = genre.genre
    chartData.datasets.legend = genre.genre


    // // START OF NESTED LOOP (MOOD DATA)
    // genre.moods.forEach((moods, j) => {
    // chartData.labels.push(moods.mood_state)
    // console.log(data);
    // const obj_in_Datasets = {label: [], data: []}
    
    // obj_in_Datasets.label.push(genre.moods[0].mood_state)
    // obj_in_Datasets.data.push(genre.moods[0].mood_duration)
    // chartData.datasets.push(obj_in_Datasets)
    // console.log(genre.moods);
    // })
    })

    let obj_in_Datasets = {label: [], data: []}
    
    obj_in_Datasets.label.push(obj.relaxed.label)
    obj_in_Datasets.data.push(obj.relaxed.data)
    chartData.datasets.push(obj_in_Datasets)

     obj_in_Datasets = {label: [], data: []}

    obj_in_Datasets.label.push(obj.excited.label)
    obj_in_Datasets.data.push(obj.excited.data)
    chartData.datasets.push(obj_in_Datasets)

    obj_in_Datasets = {label: [], data: []}

    obj_in_Datasets.label.push(obj.stress.label)
    obj_in_Datasets.data.push(obj.stress.data)
    chartData.datasets.push(obj_in_Datasets)

    obj_in_Datasets = {label: [], data: []}

    obj_in_Datasets.label.push(obj.creative.label)
    obj_in_Datasets.data.push(obj.creative.data)
    chartData.datasets.push(obj_in_Datasets)

    obj_in_Datasets = {label: [], data: []}

    obj_in_Datasets.label.push(obj.sad.label)
    obj_in_Datasets.data.push(obj.sad.data)
    chartData.datasets.push(obj_in_Datasets)

    obj_in_Datasets = {label: [], data: []}

    obj_in_Datasets.label.push(obj.focused.label)
    obj_in_Datasets.data.push(obj.focused.data)
    chartData.datasets.push(obj_in_Datasets)

    return chartData;
}



  render () {
    return (
      <>
      <br></br>
        <h5 className="lime accent-2">Mood Duration</h5>
        <canvas id="moods" width="300" height="100"></canvas>
      </>
    )
  }
}

export default BarChart;
