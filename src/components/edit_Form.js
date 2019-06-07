import React from 'react'
import Input from './Input.js'
// import { Row } from 'react-materialize';

class Edit_Form extends React.Component {
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
          this.handleChange = this.handleChange.bind(this)
   
        }

       
    
  handleChange(event) {
    event.preventDefault()   
    this.setState({
        [event.target.id]: event.target.value
    })       
}

// COMPONENT DID UPDATE HAS ACCESS TO PREVIOUS PROPS IS NOT THE SAME AS CURRENT PROPS THAT MEANS THAT IT CHANGED. IF ITS PREVIOUS PROPS AND CURRENT PROPS ARE THE SAME THAT MEANS THAT PROPS HAS NOT CHANGED.

componentDidUpdate(prevProps, prevState) {
if (prevProps.editSong.id !== this.props.editSong.id) {
// console.log(this.props.editSong);
this.setState({
    ...this.props.editSong
})
}
}

render() {
   
    return (

        <form onSubmit={(event)=>this.props.handleUpdate(event, this.state)}>
               <h5 className="white-text ">Update your playlist & mood!</h5>
               <h6 className="lime accent-2 black-text">Songs</h6>
               <div className="">
            <Input
                handleChange={this.handleChange}
                name={'genre'}
                placeholder={'Genre'}
                type={'text'}
                value= {this.state.genre}
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
</div>
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
                      
            <input onClick={(event) =>this.props.handleUpdate(event,this.state)} className='btn lime accent-2 black-text' type='submit' value="Update" />
        </form>
    )
}
}

export default Edit_Form