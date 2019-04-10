import React, { Component } from 'react'

class ProjCard extends Component {
  render() {
    const images = this.props.tech.map(image => (
      <img src={image} width="40px" height="40px" />
    ));
    return (
      <div className="proj-card">
        <h2>{this.props.name}</h2>
        <h4 className="tagname">{this.props.tagline}</h4>
        <h4>
          Link:
          <a
            href={this.props.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.props.link}
          </a>
        </h4>
        <p>{this.props.description}</p>
        {images}
      </div>
    );
  }
}


export default ProjCard
