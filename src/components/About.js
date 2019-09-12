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
            <img src={me} alt="me" width="350px" height="450px" />
          </div>
          <div className="about-item">
            <Typewriter
              className="intro"
              options={{
                strings: ["Hello, I'm Keegan."],
                delay: "natural",
                autoStart: true,
                loop: true
              }}
            />
            <p>
              I am a JavaScript developer from Panama City, FL. I am interning at Jellyfish Health building patient experience software with
              AngularJS. In my free time I like to write React apps and learn more about the ways to use JavaScript.
              Most of these applications stem from the want to add small
              utilties to my day to day life. I think that this is some of the best motivation for projects because it allows you to become deeply invested in what you are doing very quickly.
            </p>
            <h3>Recent Interests:</h3>
            <p>GraphQL</p>
            <p>Docker</p>
            <h3 className="other-contact">Other ways to reach me</h3>
            <div className="socials">
              <div className="social-item">
                <h4>Github</h4>
                <a
                  href="https://github.com/keeganl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github fa-2x" />
                </a>
              </div>
              <div className="social-item">
                <h4>LinkedIn</h4>
                <a
                  href="https://www.linkedin.com/in/keegan-lawley"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in fa-2x" />
                </a>
              </div>
              <div className="social-item">
                <h4>Dribbble</h4>
                <a href=" https://dribbble.com/keeganl">
                  <i className="fab fa-dribbble fa-2x" />
                </a>
              </div>
              <div className="social-item">
                <h4>Dribbble</h4>
                <a href="https://dribbble.com/keeganl">
                  <i className="far fa-file-alt fa-2x" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;