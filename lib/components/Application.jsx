import React, { Component } from 'react'
import UserInput from './userinput.jsx'
import Range from './range.jsx'


export default class Application extends Component {
  constructor() {
    super()
    this.state = {
      randomNumber: (Math.floor(Math.random() * 100 - 1)),
      max: parseInt('100'),
      min: parseInt('1')
    }
  }

  render(){
    return(
      <div>
        <h1>Number Guesser</h1>
        <UserInput />
        <Range />
        <p>{this.state.randomNumber}</p>
      </div>
    )
  }
}
