import React, { Component } from 'react';
import './App.css';
import 'materialize-css'; // Must use lines 3 & 4 to import materialize along with npm installs
import 'materialize-css/dist/css/materialize.min.css';
import { Row, Col } from 'react-materialize';
import BarChart from './components/BarChart'
import Playlist from './components/Playlist';
import Form from './components/Form.js';
import Edit_Form from './components/edit_Form.js';
import PieChart from './components/PieChart';
import NavBar from './components/NavBar';


// HEROKU BUILD PACKS

// let baseURL = process.env.REACT_APP_BASEURL

// //alternate baseURL = 'https://tonus-eq-api.herokuapp.com/tonus_eqs'

// if (process.env.NODE_ENV === 'development') {
//   baseURL = 'http://localhost:3000'
// } else {
//   baseURL = 'https://tonus-eq-api.herokuapp.com/tonus_eqs'
// }

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
      song: '',
      mood_state: '',
      mood_duration: '',
      mood_duration_percentage: '',
      editSong: {}      
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleChange = this.handleChange.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.deleteGenre = this.deleteGenre.bind(this)
    this.handleEdit = this.handleEdit.bind(this)

}

// UPDATE ROUTE
handleEdit(event, song) {
  event.preventDefault()
  this.setState({
    editSong: song
  })
  
}

handleUpdate(event, inputs) {
  event.preventDefault()
  console.log(inputs.id);
  const Songs = {};

  Songs.genre = inputs.genre
  Songs.artist = inputs.artist
  Songs.song = inputs.song
  
  console.log(Songs);
  event.preventDefault()
  fetch(`http://localhost:3000/tonus_eqs/${inputs.id}`,
  {
    body: JSON.stringify(Songs),
      method: 'PUT',
      headers: {
          'Accept': 'application/json, text/plan, */*',
          'Content-Type': 'application/json'
      }
  })
  .then(updatedSongs => {
    return updatedSongs.json()
    })
    .then(jsonedSongs => {
        console.log(jsonedSongs.id);
        // this.setState({
        //             editSong: inputs
        
        //           })
     
  let Moods = {};

  Moods.mood_state = inputs.mood_state
  Moods.mood_duration = inputs.mood_duration
  Moods.mood_duration_percentage = inputs.mood_duration_percentage
  
    event.preventDefault()
    fetch(`http://localhost:3000/tonus_eqs/${inputs.id}/moods/${inputs.id}`,
    {
        body: JSON.stringify(Moods),
        method: 'PUT',
        headers: {
            'Accept': 'application/json, text/plan, */*',
            'Content-Type': 'application/json'
        }
  
    })
    .then(updatedMoods => {
    return updatedMoods.json()
    })
    .then(jsonedMoods => {
        console.log(jsonedMoods);
  
        this.setState({
         
            editSong: inputs
          })
        })
        .catch(error => console.log(error));

  })
}
  

// CREATE ROUTE
handleSubmit(event, inputs) {
  // console.log("moods");
  event.preventDefault()
  console.log(this.state);
  const Songs = {};
  Songs.genre = inputs.genre
  Songs.artist = inputs.artist
  Songs.song = inputs.song
  
  console.log(Songs);
 
  event.preventDefault()
  fetch(`http://localhost:3000/tonus_eqs`,
  {
      body: JSON.stringify(Songs),
      method: 'POST',
      headers: {
          'Accept': 'application/json, text/plan, */*',
          'Content-Type': 'application/json'
      }


  })
  .then(createdSongs => {
  return createdSongs.json()
  })
  .then(jsonedSongs => {
      console.log(jsonedSongs.id);
  
//         // Add 2nd fetch here

let Moods = {};

Moods.mood_state = inputs.mood_state
Moods.mood_duration = inputs.mood_duration
Moods.mood_duration_percentage = inputs.mood_duration_percentage

  event.preventDefault()
  fetch(`http://localhost:3000/tonus_eqs/${jsonedSongs.id}/moods`,
  {
      body: JSON.stringify(Moods),
      method: 'POST',
      headers: {
          'Accept': 'application/json, text/plan, */*',
          'Content-Type': 'application/json'
      }

  })
  .then(createdMoods => {
  return createdMoods.json()
  })
  .then(jsonedMoods => {
      console.log(jsonedMoods);

      this.setState({
          genre: '',
          artist: '',
          song: '',
          mood_state: '',
          mood_duration: '',
          mood_duration_percentage: ''
      })
  })
  .catch(error => console.log(error));
})
}

// DELETE GENRE
deleteGenre(id) {
  //   ADD BASEURL TO FETCH "('baseURL + /tonus_eqs')"
  // event.preventDefault()
  fetch(`http://localhost:3000/tonus_eqs/${id}`, {
          method: 'DELETE'
      }).then(response => {
          console.log(this.state.genre);

          const findIndex = this.state.genre.findIndex(genre => genre._id === id)

          const copyGenre = [...this.state.genre]
          copyGenre.splice(findIndex, 1)
          this.setState({ genre: copyGenre })
      })
}

render (){
  // console.log(this.state)
  return (
    <div className="App blue-grey darken-3">
    <NavBar/>
    <div className="container blue-grey darken-3">
    
    <Row>
    <h5 className="white-text">Recently Played</h5>
    <Col s={12} m={9} >
    <Playlist genre = {this.state.genre} deleteGenre = {this.deleteGenre}
    handleEdit = {this.handleEdit}/>
    </Col>
    <Col s={12} m={3} >
    <Form currentValue={this.currentValue} handleSubmit = {this.handleSubmit}
    handleUpdate = {this.handleUpdate}/>

    <Edit_Form handleUpdate = {this.handleUpdate}
    editSong = {this.state.editSong}/>
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
