import React, { Component } from 'react'
import { UserGuess } from './UserGuess'

export default class UserInput extends Component {
  constructor() {
    super();
    this.state = {
      guess: ''
    }
  }

  render(){
    return(
      <div>
        <UserGuess />
        <SubmitGuess />
        <p>You have guessed: {this.state.guess}</p>
      </div>
    )
  }
}
