import React, { Component } from 'react'

export default class Range extends Component {
  constructor() {
    super();
    this.state = {
      min: '',
      max: ''
    }
  }
  render(){
    return(
      <div>
        <input type="number" placeholder="Minimum"/>
        <input type="number" placeholder="Maximum"/>
      </div>
    )
  }
}
