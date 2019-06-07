import React from 'react'

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
          <a href="sass.html" className="brand-logo center">Tonus EQ</a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><a href="sass.html">Home</a></li>
            <li><a href="badges.html">Playlist</a></li>
            <li><a href="collapsible.html">Mood Dashboard</a></li>
          </ul>
        </div>
      </nav> 
    )
}
}

export default NavBar