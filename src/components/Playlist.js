import React, { Component } from 'react';



class Playlist extends Component {
constructor (props) {
    super(props)
    this.state = {
        genre: '',
        artist: '',
        songs: '',
        mood_state: '',
    }
}

 
    render() {
       
        return (
            <div className="playlist">
        <h5>Playlist</h5>
       
        
        <table>
            <thead>
                <tr>
                    <th>Genre</th>
                    <th>Artist</th>
                    <th>Song</th>
                    <th>Mood</th>
                </tr>
            </thead>
            <tbody>

                {this.props.genre.length > 0 && this.props.genre.map( (genre, i) => {
                    console.log('yghgh ',genre);

                    
                    
                    return (
                <tr key={i}>

                    <td>{genre.genre}</td>
                    <td>{genre.artist}</td>
                    <td>{genre.song}</td>
                    <td>{genre.moods[0].mood_state}</td>
                </tr>
                    )
                })}
    
     </tbody> 
        </table>
            </div>
        )
    }
}

export default Playlist;