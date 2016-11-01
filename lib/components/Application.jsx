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
      this.compareToMin()
      this.clearGuessInput()
    }
  }

  compareToMin() {
    if (parseInt(this.state.guess) < this.state.min) {
      this.setState({ feedback: "Your number is outside the minimum range of the current game."})
    } else {
      this.compareToMax()
    }
  }

  compareToMax() {
    if(parseInt(this.state.guess) > this.state.max){
      this.setState({ feedback: "Your number is outside the maximum range of the current game."})
    } else {
      this.compareToRandomHigh()
    }
  }

  compareToRandomHigh() {
    if(parseInt(this.state.guess) > this.state.randomNumber){
      this.setState({ feedback: 'Your guess is too high. Guess again!'})
    } else {
      this.compareToRandomLow()
    }
  }

  compareToRandomLow() {
    if(parseInt(this.state.guess) < this.state.randomNumber) {
      this.setState({ feedback: 'Your guess is too low. Guess again!'})
    } else {
      this.compareToWin()
    }
  }

  compareToWin() {
    if(parseInt(this.state.guess) == this.state.randomNumber){
      this.setState({ feedback: 'JACKPOT'})
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
        <p>{this.state.feedback}</p>
      </div>
    )
  }
}
