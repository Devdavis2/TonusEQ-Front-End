import React, { Component } from 'react';
import Chart from 'chart.js'
// import { Doughnut } from 'react-chartjs-2';



class PieChart extends Component {
    componentWillMount () {
        this.getData()
    }

    getData() {
        fetch('/tonus_eqs')
        .then(response => response.json())
        .then(jData => this.preparedData(jData))  
        .then(data => this.createChart(data))
    }

    createChart(data) {
        const ctx2 = document.querySelector('#moodsPie')
 
        const moodsChart = new Chart(ctx2, {
            type: 'pie',
            data: data
        })
    }



//     preparedData (data) {
//         const chartData = {
//             labels: [],
//             datasets: [
//             ],
            
//         }

//         // var option = {
//         //     scales: {
//         //         yAxis:[{
//         //             stacked: true
//         //         }]
//         //     }
//         // }

//         const obj = {};
    
//         // MOOD STATES
//     obj.relaxed = {
//         label: '',
//         data: 0
        
//     }
//     obj.excited = {
//         label: '',
//         data: 0
//     }
//         obj.stress = {
//         label: '',
//         data: 0
//     }
//         obj.creative = {
//         label: '',
//         data: 0   
//     }
//         obj.sad = {
//         label: '',
//         data: 0    
//         }


//         window.onload = function(){
//             window.onload = function () {
//                 window.myRadar = new Chart(document.getElementById("canvas2").getContext("2d")).Radar(chartData, {
//                     responsive: true
//                 });
//             var ctx2 = document.getElementById("canvas").getContext("2d");
//             window.myPie = new Chart(ctx2).Pie(chartData, {
//                 responsive : true
//             });
//         }
//     }

//     // START OF FOR LOOP
//     data.forEach( (genre, i) => {
//         // obj.label = genre.genre
//         // obj.data = genre.moods

//         if (genre.moods[0].mood_state === "Relaxed/Chill") {
//            obj.relaxed.label = genre.moods[0].mood_state
//            obj.relaxed.data += genre.moods[0].mood_duration_percentage
           
//         }
//         else if (genre.moods[0].mood_state === "Excited") {
//             obj.excited.label = genre.moods[0].mood_state
//             obj.excited.data += genre.moods[0].mood_duration_percentage
//          }
//          else if (genre.moods[0].mood_state === "Stress") {
//             obj.stress.label = genre.moods[0].mood_state
//             obj.stress.data += genre.moods[0].mood_duration_percentage
//          }
//          else if (genre.moods[0].mood_state === "Creative") {
//             obj.creative.label = genre.moods[0].mood_state
//             obj.creative.data += genre.moods[0].mood_duration_percentage
//          }     
//          else if (genre.moods[0].mood_state === "Sad") {
//             obj.sad.label = genre.moods[0].mood_state
//             obj.sad.data += genre.moods[0].mood_duration_percentage
//          }

//         //  console.log(obj.sad);
    
//     // MUSIC CHART LABEL
//     // chartData.datasets.obj.label = genre.genre
//     chartData.datasets.legend = genre.genre
//     })

//     let obj_in_Datasets = {label: [], data: []}
    
//     obj_in_Datasets.label.push(obj.relaxed.label)
//     obj_in_Datasets.data.push(obj.relaxed.data)
//     chartData.datasets.push(obj_in_Datasets)

//      obj_in_Datasets = {label: [], data: []}

//     obj_in_Datasets.label.push(obj.excited.label)
//     obj_in_Datasets.data.push(obj.excited.data)
//     chartData.datasets.push(obj_in_Datasets)

//     obj_in_Datasets = {label: [], data: []}

//     obj_in_Datasets.label.push(obj.stress.label)
//     obj_in_Datasets.data.push(obj.stress.data)
//     chartData.datasets.push(obj_in_Datasets)

//     obj_in_Datasets = {label: [], data: []}

//     obj_in_Datasets.label.push(obj.creative.label)
//     obj_in_Datasets.data.push(obj.creative.data)
//     chartData.datasets.push(obj_in_Datasets)

//     obj_in_Datasets = {label: [], data: []}

//     obj_in_Datasets.label.push(obj.sad.label)
//     obj_in_Datasets.data.push(obj.sad.data)
//     chartData.datasets.push(obj_in_Datasets)

//     return chartData;
// }

  render () {
    return (
      <>
      <br></br>
        <h5 className="lime accent-2">Mood State Percent</h5>
        <canvas id="moodsPie" width="300" height="100"></canvas>
      </>
    )
  }
}

export default PieChart;
