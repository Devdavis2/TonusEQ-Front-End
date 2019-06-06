import React, { Component } from 'react';



class Playlist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            love: []
        }
        this.toggleLove = this.toggleLove.bind(this)

    }

    toggleLove(index) {
        const newLove = this.state.love
        newLove[index] = !newLove[index]
        this.setState({ love: newLove })
    }



    render() {

        return (
            <div className="playlist">
                <h5 className="lime accent-2">Dope Tracks </h5>


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
    <tr key={genre.id} onClick={(e) => this.toggleLove(i)}>

<td>{genre.genre}</td>
    <td>{genre.artist}</td>
        <td>{genre.song}</td>
        <td>{genre.moods[0].mood_state}</td>
{this.state.love[i] ? <td>&hearts;</td> : <td></td>}
    <td onClick={() => this.props.deleteGenre(genre.id)}>x</td>
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