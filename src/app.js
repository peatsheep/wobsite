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
        "apod": true,
      }
    }
  }

  handleNodeClick(element) {
    this.setState(
      {hidden: 
        update(
          this.state.hidden, 
          {[element]: {$set: !this.state.hidden[element]}}
        )
      }
    )
  }

  render() {
    return (
      <div>
        <div>
          <div className="center" onClick={() => this.handleNodeClick("apod")}>
            <Me />
          </div>
          <div className="center">
            {!this.state.hidden.apod && <Apod />}
          </div>
        </div>
      </div>
    )
  }
}

export default App;