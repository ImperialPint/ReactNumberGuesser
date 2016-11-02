import React, { Component } from 'react'
import { UserGuess } from './UserGuess'
import { SubmitButton } from './SubmitButton'
import { NumberRange } from './NumberRange.jsx'
import { ResetGame } from './ResetGame'
import { ClearButton } from './ClearButton'


export default class Application extends Component {
  constructor() {
    super()
    this.state = {
      guess: '',
      randomNumber: '',
      feedback: '',
      max: 100,
      min: 1
    }
  }

  clearGuess() {
    this.setState({ guess: '' })
  }

  componentDidMount() {
    this.createRando()
  }

  createRando() {
    this.setState({ randomNumber:  (Math.floor(Math.random() * (this.state.max - this.state.min) + this.state.min))
    })
  }

  winChangeRange() {
    let min = this.state.min - 10
    let max = this.state.max + 10
    this.setState({ min: min, max: max })
  }

  updateGuess(e){
    this.setState({ guess: e.target.value })
  }

  submitGuess(){
    if(isNaN(parseInt(this.state.guess))){
      this.setState({ feedback: 'Your guess is not a valid number. Please guess again.'})
      this.clearGuessInput()
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
      this.setState({ feedback: 'Guess lower.'})
    } else {
      this.compareToRandomLow()
    }
  }

  compareToRandomLow() {
    if(parseInt(this.state.guess) < this.state.randomNumber) {
      this.setState({ feedback: 'Guess higher.'})
    } else {
      this.compareToWin()
    }
  }

  compareToWin() {
    if(parseInt(this.state.guess) == this.state.randomNumber){
      this.setState({ feedback: 'You guessed correctly!'})
      this.winChangeRange();
      this.createRando();
    }
  }

  clearGuessInput(){
    this.setState({ guess: ''})
  }

  resetGame(){
    this.createRando();
    this.setState({ guess: '', feedback: ''})
  }

  userMin(e){
    this.setState({min: parseInt(e.target.value)})
  }

  userMax(e){
    this.setState({max: parseInt(e.target.value)})
  }

  setUserMinMax(e){
    // this.setState({max: parseInt(e.target.value), min: parseInt(e.target.value)})
    this.createRando()
  }

  render(){
    let toggleDisable = false
    if (!this.state.guess){
      toggleDisable = true
    }
    let toggleRange = true
    if(this.state.feedback == "You guessed correctly!"){
      toggleRange = false
    }
    return(
      <div className="woot">
        <h1>Number Guesser</h1>
        <UserGuess
          value={ this.state.guess }
          updateGuess={ this.updateGuess.bind(this) }
        />
        <ClearButton
          clear={ this.clearGuess.bind(this) }
          toggleDisable={ toggleDisable }
        />
        <SubmitButton
          toggleDisable={ toggleDisable }
          submitGuess={ this.submitGuess.bind(this) }
        />
        <NumberRange
          toggleRange={ toggleRange }
          minValue={ this.state.min }
          maxValue={ this.state.max }
          submitMinMax={ this.setUserMinMax.bind(this) }
          userMin={ this.userMin.bind(this) }
          userMax={ this.userMax.bind(this) }
        />
        <p className="feedback">{ this.state.feedback }</p>
        <ResetGame resetGamez={ this.resetGame.bind(this) }/>
      </div>
    )
  }
}
