import React, { Component } from 'react'
import update from 'immutability-helper'
import Apod from './apod'
import './index.css'

const Me = () => (
  <div className="node">
    <h1>Will Neville</h1>
  </div>
)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hidden: {
        "Me": false,
        "Apod": true,
      }
    }
  }

  render() {
    return (
      <div>
        <div>
          <div 
            onClick={() => this.setState({hidden: update(this.state.hidden, {"Apod": {$set: !this.state.hidden.Apod}})})}
            className="center"
          >
            <Me />
          </div>
          <div className="center">
            {!this.state.hidden.Apod && <Apod />}
          </div>
        </div>
      </div>
    )
  }
}

export default App;