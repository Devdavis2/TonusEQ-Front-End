import React from 'react'
import Input from './Input.js'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           
              genre: '',
              artist: '',
              song: '',
              mood_state: '',
              mood_duration: '',
              mood_duration_percentage: '',
          }
    this.handleSubmit = this.handleSubmit.bind(this)
          this.handleChange = this.handleChange.bind(this)
        }
    






handleSubmit(event) {
    // console.log("moods");
    event.preventDefault()
    console.log(this.state);
    let Songs = {};
  
    Songs.genre = this.state.genre
    Songs.artist = this.state.artist
    Songs.song = this.state.song
    
    console.log(Songs);
   
    event.preventDefault()
    fetch
    (`http://localhost:3000/tonus_eqs`,
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
  
  Moods.mood_state = this.state.mood_state
  Moods.mood_duration = this.state.mood_duration
  Moods.mood_duration_percentage = this.state.mood_duration_percentage
  
    event.preventDefault()
    fetch
    (`http://localhost:3000/tonus_eqs/${jsonedSongs.id}/moods`,
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

  handleChange(event) {
    event.preventDefault()   
    this.setState({
        [event.target.id]: event.target.value
    })       
}

render() {
    return (

        <form onSubmit={this.handleSubmit}>
               <h5 className="white-text">Update your playlist & mood!</h5>
               <h6 className="lime accent-2 black-text">Songs</h6>
            <Input
                handleChange={this.handleChange}
                name={'genre'}
                placeholder={'Genre'}
                type={'text'}
                value={this.state.genre}
                id={'genre'}
            />
            <Input
                handleChange={this.handleChange}
                name={'artist'}
                placeholder={'Artist'}
                type={'text'}
                value={this.state.artist}
                id={'artist'}
            />
            <Input
                handleChange={this.handleChange}
                name={'song'}
                placeholder={'Song'}
                type={'text'}
                value={this.state.song}
                id={'song'}
            />

<h6 className="lime accent-2 black-text">Mood State</h6>

            <Input
                handleChange={this.handleChange}
                name={'mood_state'}
                placeholder={'Mood'}
                type={'text'}
                value={this.state.mood_state}
                id={'mood_state'}
            />
                        <Input
                handleChange={this.handleChange}
                name={'mood_duration'}
                placeholder={'Time'}
                type={'text'}
                value={this.state.mood_duration}
                id={'mood_duration'}
            />

            <Input
                handleChange={this.handleChange}
                name={'mood_duration_percentage'}
                placeholder={'%'}
                type={'text'}
                value={this.state.mood_duration_percentage}
                id={'mood_duration_percentage'}
            />
            <input className='btn lime accent-2 black-text'type='submit' value="Add" />
        </form>

    )
}
}

export default Form