import React, { Component } from 'react'

class ProjCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pics: []
    }
  }
  componentDidMount() {
    console.log(this.props.tech);
    this.setState({
      pics: [...this.props.tech],
    })

  }

  render() {
    let images = this.state.pics.map((image, index) => (
        <img
          className="techImgs"
          key={index}
          src={require(`../assets/${image}.svg`)}
          alt="tech"
          width="40px"
          height="40px"
        />
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
        <div className="tech-container">
          <div className="tech-item">
            <h4>Tech Used: </h4>
          </div>
          <div className="tech-item">
            {images}
          </div>
        </div>
      </div>
    );
  }
}


export default ProjCard
