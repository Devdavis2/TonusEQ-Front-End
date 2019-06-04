import React, { Component } from 'react';
import './App.css';
import 'materialize-css'; // Must use lines 3 & 4 to import materialize along with npm installs
import 'materialize-css/dist/css/materialize.min.css';
import BarChart from './components/BarChart'
import Playlist from './components/Playlist';

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
  console.log(this.state)
  return (
    <div className="App">
    <div className="container">
    <h1>Music EQ</h1>
    <Playlist genre = {this.state.genre} />
<BarChart/>
    </div>
    </div>
  );
}
}

export default App;
