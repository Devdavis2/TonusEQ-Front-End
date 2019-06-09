import React from 'react'
import { Link } from "react-router-dom"

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            NavBar: []
        }
    }


render () {
    return (
        <nav className="black-text  blue-grey lighten-2 ">
        <div className="nav-wrapper ">
          <Link className="brand-logo center" to="/">Tonus EQ</Link>
          <div  className="links left hide-on-med-and-down" id="nav-mobile">
            <Link   to="/"> Home</Link>

            <Link to="/Playlist">Playlist</Link>
            
            <Link to="/Dashboard">Dashboard</Link>
          </div>
        </div>
      </nav> 
      
    )
}
}

export default NavBar