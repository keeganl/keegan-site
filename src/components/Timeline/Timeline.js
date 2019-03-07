import React, { Component } from 'react'
import TimelineHeader from './TimelineHeader';
import TimelinePath from './TimelinePath';

class Timeline extends Component {
  render() {
    return (
      <React.Fragment>
        <TimelineHeader />
        <TimelinePath />
      </React.Fragment>
    )
  }
}

export default Timeline;
