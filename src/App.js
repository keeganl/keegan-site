import React, { Component } from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import Timeline from './components/Timeline/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <About />
        <Timeline />
        <Projects />
        <Contact />
      </React.Fragment>
    );
  }
}

export default App;
