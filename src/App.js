import React, { Component } from 'react';
import './App.css';
import 'materialize-css'; // Must use lines 3 & 4 to import materialize along with npm installs
import 'materialize-css/dist/css/materialize.min.css';
import BarChart from './components/BarChart'
import Playlist from './components/Playlist';
import Form from './components/Form.js';
import PieChart from './components/PieChart';


// HEROKU BUILD PACKS

let baseURL = process.env.REACT_APP_BASEURL

//alternate baseURL = 'https://tonus-eq-api.herokuapp.com/tonus_eqs'

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3000'
} else {
  baseURL = 'https://tonus-eq-api.herokuapp.com/tonus_eqs'
}

console.log('current base URL:', baseURL)

// START OF APP
class App extends Component {
  componentDidMount () {
    this.getData()
}

getData() {
    fetch(baseURL)
    .then(response => response.json())
    // .then(data => data.json())
    // .catch(err => console.log(err))
    // .then(parsedData => this.setState({genre: parsedData}), 
    // err=> console.log(err))
    .then(parsedData => this.setState({genre: parsedData}))
 
}

  constructor (props) {
    super(props)
    this.state = {
        genre: '',
        artist: '',
        songs: '',
        mood_state: '',
    }
}

render (){
  console.log(this.state)
  return (
    <div className="App">
    <div className="container">
    <h1>Music EQ</h1>
    <Playlist genre = {this.state.genre} />
    <Form/>
    <PieChart/>
    <BarChart/>
    </div>
    </div>
  );
}
}

export default App;
