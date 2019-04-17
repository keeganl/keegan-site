import React, { Component } from 'react'
import ProjCard from './ProjCard'

export default class componentName extends Component {
  render() {
    return (
      <div className="projectsContainer">
        <h1>Projects</h1>
        <ProjCard
          name="Interior Design"
          link="https://interior-design-wirls.herokuapp.com/"
          tech={["js", "node", "react", "sass", "sketch"]}
          description="This project was an assignment for my Software Engineering course at FSU. The app lets you generate color palettes based off of color theory principles or lets you grab the palette from an image that you like. You can then take any of those colors and search for furniture of that color."
        />
        <ProjCard
          name="Discover Weekly Dump"
          link="https://github.com/keeganl/Discover-Weekly-Dump"
          tagline="An application that lets you view the 3D models on your computer in gallery format. Built with Electron"
          tech={["js", "node", "sketch"]}
          gif="https://giphy.com/embed/3DvkNZEy0VSTbDmMb4"
          description="This project stemmed from two things. The need to find more music to listen to and the fact that every Monday your Discover Weekly playlist resets. Most of the time I forget to copy the songs over to listen to them later. This script handles copying them into another playlist every Monday so I do not have to worry about it."
        />
        <ProjCard
          name="Orbit"
          link="https://github.com/keeganl/orbit"
          tagline="An application that lets you view the 3D models on your computer in gallery format. Built with Electron."
          tech={["js", "electron", "sass"]}
          gif="https://giphy.com/embed/uFhZgHQLyvDWUVXnTP"
          description="This project was one built on necessity. I had a large collection of 3D models and I needed a way to view them without having to open the software to edit them. This also gave me the opportunity to use Google's Firebase to store data and handle user authentication for the first time."
        />
        <ProjCard
          name="Jot"
          link="https://github.com/keeganl/Jot."
          tagline="A whiteboard that lives in the menubar."
          tech={["js", "electron", "sass", "sketch"]}
          gif="https://giphy.com/embed/2uwtC0mxOQxGj1I7BR"
          description="A lot of the problems that I need to solve for school and while developing need to drawn out for full understanding. This gave me a way to whiteboard the problem and not have to go looking for an actual whiteboard. This project also was the first time that I packaged an Electron app into an executable application."
        />
      </div>
    );
  }
}
