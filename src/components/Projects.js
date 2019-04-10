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
          tagline="An application that lets you view the 3D models on your computer in gallery format. Built with Electron"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
            veniam dolores deleniti, omnis expedita voluptas harum numquam
            minus ipsa, delectus repudiandae. Asperiores pariatur deserunt
            fuga optio unde corporis magni ut?"
        />
        <ProjCard
          name="Orbit"
          link="https://github.com/keeganl/orbit"
          tagline="An application that lets you view the 3D models on your computer in gallery format. Built with Electron."
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
            veniam dolores deleniti, omnis expedita voluptas harum numquam
            minus ipsa, delectus repudiandae. Asperiores pariatur deserunt
            fuga optio unde corporis magni ut?"
        />
        <ProjCard
          name="Jot"
          link="https://github.com/keeganl/Jot."
          tagline="A whiteboard that lives in the menubar."
          description=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla numquam, temporibus distinctio laudantium, quo quod autem dolorum doloremque accusantium, animi dolore sequi voluptatibus quisquam. Placeat fugit libero eligendi quisquam nam."
        />
      </div>
    );
  }
}
