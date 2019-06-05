import React from 'react'
import Input from './Input.js'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           
              genre: '',
              artist: '',
              song: '',
            //   mood_state: '',
            //   mood_duration: '',
            //   mood_duration_percentage: '',
            //   team_eq_id: '',
          }
        }
    


handleSubmit(event) {
    // console.log("moods");
    event.preventDefault()
    console.log(this.state);
    let playlist_Moods = this.state
    console.log(playlist_Moods);
    
    event.preventDefault()
    fetch
    (`http://localhost:3000/tonus_eqs`,
    {
        body: JSON.stringify(playlist_Moods),
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plan, */*',
            'Content-Type': 'application/json'
        }
    })
    .then(createdplaylist_Moods => {
    return createdplaylist_Moods.json()
    })
    .then(jsonedplaylist_Moods => {
        this.setState({
            genre: '',
            artist: '',
            song: '',
          //   mood_state: '',
          //   mood_duration: '',
          //   mood_duration_percentage: '',
          //   team_eq_id: '',
        })
    })
    .catch(error => console.log(error));
}

handleChange(event) {
    event.preventDefault()
    console.log(event.target.id)
    console.log(event.target.value)
    this.setState({
        [event.target.id]: event.target.value
    })
        
        console.log(this.state);
}

render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <Input
                handleChange={this.handleChange}
                name={'genre'}
                placeholder={'Genre'}
                type={'text'}
                defaultValue={this.state.genre}
                id={'genre'}
            />
            <Input
                handleChange={this.handleChange}
                name={'artist'}
                placeholder={'Artist'}
                defaultValue={'text'}
                value={this.state.artist}
                id={'artist'}
            />
            <Input
                handleChange={this.handleChange}
                name={'songs'}
                placeholder={'Song Title'}
                type={'text'}
                defaultValue={this.state.songs}
                id={'songs'}
            />
            <input className='btn lime accent-2 black-text'type='submit' value="Update your playlist and mood!" />
        </form>

    )
}
}

export default Form