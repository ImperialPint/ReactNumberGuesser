import React, { Component } from 'react'

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
        <input placeholder="Typer your guess here"/>
      </div>
    )
  }
}
