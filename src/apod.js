import React, { Component } from 'react';
import _ from 'lodash';
import './index.css'

class Apod extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apod: null
    }
  }

  componentDidMount() {
    this.getApod();      
  }

  getApod() {
    const today = new Date();
    const date = _.join([today.getFullYear(), today.getMonth(), today.getDate()], '-');

    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&hd=True&date=' + date)
      .then(response => response.json())
      .then(apod => this.setState({apod: apod}))
      .catch(e => console.warn(e));
  }

  render() {
    const { apod } = this.state;
    if(apod) {
      if(apod.media_type === "image") {
        return(
          <div>
            <div>
              <img id="apod" src={apod.url} alt="Nasa Astronomy Pic of the Day"/>
            </div>
            <div id="explanation">
              <span>{apod.explanation}</span>
            </div>
          </div>
        )
      }
    }
    return null
  }
}

export default Apod;