import React, { Component } from 'react'
import { UserGuess } from './UserGuess'
import { SubmitButton } from './SubmitButton'
import Range from './range.jsx'


export default class Application extends Component {
  constructor() {
    super()
    this.state = {
      guess: '',
      prevGuess: '',
      randomNumber: '',
      feedback: '',
      max: 100,
      min: 1
    }
  }

  componentDidMount() {
    this.createRando()
  }

  createRando() {
    this.setState({ randomNumber:  (Math.floor(Math.random() * 100))
    })
  }

  updateGuess(e){
    this.setState({ guess: e.target.value })
  }

  submitGuess(){
    if(isNaN(parseInt(this.state.guess))){
      this.setState({ feedback: 'Your guess is not a valid number. Please guess again.'})
      this.clearGuessInput()
      console.log('hello');
    } else {
      this.compareToRange()
      this.clearGuessInput()
    }
  }

  compareToRange() {
    if (parseInt(this.state.guess) < this.state.min) {
      this.setState({ feedback: "w00t!"})
    }
  }

  clearGuessInput(){
    this.setState({ guess: ''})
  }

  render(){
    return(
      <div>
        <h1>Number Guesser</h1>
        <UserGuess value={this.state.guess} updateGuess={this.updateGuess.bind(this)}/>
        <SubmitButton submitGuess={this.submitGuess.bind(this)}/>
        <Range />
        <p>{this.state.randomNumber}</p>
      </div>
    )
  }
}
