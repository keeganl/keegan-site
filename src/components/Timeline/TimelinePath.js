import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


class TimelinePath extends Component {
  render() {
    return (
      <React.Fragment>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="January 2019 - Present"
            iconStyle={{ background: "#FA9C39", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Jellyfish Health
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Development Intern
            </h4>
            <p>
              I build patient experience software with AngularJS.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - 2018"
            iconStyle={{ background: "#4DCEC4", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Optical Integrity
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Software Developer
            </h4>
            <p>
              I built Holmium laser software with Electron.js.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2015 - 2016"
            iconStyle={{ background: "#FF6B6B", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Optical Integrity
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              R&D Technician
            </h4>
            <p>
              Collaborated with engineers on fiber production and fiber design work using Autodesk Fusion 360.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </React.Fragment>
    );
  }
}

export default TimelinePath;