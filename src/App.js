import React, { Component } from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import Timeline from './components/Timeline/Timeline';
import Contact from './components/Contact';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <About />
        <Timeline />
        <Contact />
      </React.Fragment>
    );
  }
}

export default App;
