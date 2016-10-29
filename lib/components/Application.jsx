import React, { Component } from 'react'
import UserInput from './userinput.jsx'


export default class Application extends Component {
  constructor() {
    super()
    this.state = {
      randomNumber: (Math.floor(Math.random() * 100 - 1)),
      max: 100,
      min: 1
    }
  }

  render(){
    return(
      <div>
        <h1>Number Guesser</h1>
        <p>{this.state.randomNumber}</p>
        <UserInput />
      </div>
    )
  }
}
