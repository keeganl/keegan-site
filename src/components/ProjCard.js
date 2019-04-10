import React, { Component } from 'react'

class ProjCard extends Component {
  render() {
    return (
      <div className="proj-card">
        <h2>{this.props.name}</h2>
        <h4>
          Link:
          <a
            href="https://interior-design-wirls.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.props.link}
          </a>
        </h4>
        <p>{this.props.description}</p>
      </div>
    );
  }
}


export default ProjCard
