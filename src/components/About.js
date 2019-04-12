import React, { Component } from 'react'
import Typewriter from 'typewriter-effect';
import me from '../assets/ME.png';


class About extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="about">About</h1>
        <div className="aboutContainer">
          <div className="me about-item">
            <img src={me} alt="me" width="300px" height="400px" />
          </div>
          <div className="about-item">
            <Typewriter
              className="intro"
              options={{
                strings: ["Hello, I'm Keegan."],
                delay: "natural",
                autoStart: true,
                loop: true,
              }}
            />
            <p>
              I am a JavaScript developer who enjoys design and photography.
          </p>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default About;