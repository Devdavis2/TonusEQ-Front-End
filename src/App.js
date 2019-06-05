import React, { Component } from 'react';
import './App.css';
import 'materialize-css'; // Must use lines 3 & 4 to import materialize along with npm installs
import 'materialize-css/dist/css/materialize.min.css';
import { Row, Col } from 'react-materialize';
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

// console.log('current base URL:', baseURL)

// START OF APP
class App extends Component {
  componentDidMount () {
    this.getData()
}

getData() {
    fetch('/tonus_eqs')
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
  // console.log(this.state)
  return (
    <div className="App blue-grey darken-3">
    
    <div className="container blue-grey darken-3">
    <Row>
    <h1 className="white-text">Music EQ</h1>
    <Col s={12} m={9} >
    <Playlist genre = {this.state.genre}/>
    </Col>
    <Col s={12} m={3} >
    <Form/>
    </Col>
    </Row>
    <Row>
    <br></br>
    <Col s={12} m={4} >
    <PieChart/>
    </Col>
    <Col s={12} m={8} className="grey lighten-4">
    <BarChart />
    <br></br>
    </Col>
    </Row>
    </div>
    
    
    </div>
    
  );
}
}

export default App;
