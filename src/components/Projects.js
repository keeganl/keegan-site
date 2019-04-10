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
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
            veniam dolores deleniti, omnis expedita voluptas harum numquam
            minus ipsa, delectus repudiandae. Asperiores pariatur deserunt
            fuga optio unde corporis magni ut?"
        />
        <ProjCard
          name="Discover Weekly Dump"
          link="https://github.com/keeganl/Discover-Weekly-Dump"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
            veniam dolores deleniti, omnis expedita voluptas harum numquam
            minus ipsa, delectus repudiandae. Asperiores pariatur deserunt
            fuga optio unde corporis magni ut?"
        />
      </div>
    );
  }
}
