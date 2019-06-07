import React, { Component } from 'react';



class Playlist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            love: []
        }
        this.toggleLove = this.toggleLove.bind(this)
        this.currentValue = this.currentValue.bind(this)

    }

    toggleLove(index) {
        const newLove = this.state.love
        newLove[index] = !newLove[index]
        this.setState({ love: newLove })
    }

    currentValue(event, id) {
        // this.props.handleEdit(event)
        // console.log(this.props)
        fetch(`/tonus_eqs/${id}`)
        .then(response => response.json())
        .then(parsedData => this.props.handleEdit(event, parsedData))
        // console.log(id);
        
     
    }

    render() {

        return (
            <div className="playlist">
                <h5 className="lime accent-2">Work Mix </h5>


                <table className=" white-text">
                    <thead>
                        <tr>
                            <th>Genre</th>
                            <th>Artist</th>
                            <th>Song</th>
                            <th>Mood</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.props.genre.length > 0 && this.props.genre.map((genre, i) => {
                            // console.log(genre);

                            return (
    <tr id={genre.id} key={genre.id} onClick={(e) => this.toggleLove(i)
    }>
<td>{genre.genre}</td>
    <td>{genre.artist}</td>
        <td>{genre.song}</td>
        <td>{genre.moods[0].mood_state}</td>
{this.state.love[i] ? <td>&hearts;</td> : <td></td>}

<td className="btn-small modal-trigger blue-grey lighten-2" data-target="modall" onClick={(event) => this.currentValue(event, genre.id)}>edit</td>

    <td className="btn-small blue-grey darken-4" onClick={() => this.props.deleteGenre(genre.id)}>x</td>
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