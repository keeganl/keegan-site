import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div className="navContainer">
        <div item="name" className="navItem">Keegan Lawley</div>
        <div className="navItem">About</div>
        <div className="navItem">Projects</div>
        <div className="navItem">Contact</div>
      </div>
    )
  }
}

export default NavBar;
