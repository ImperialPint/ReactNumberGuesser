import React from 'react'

export const UserGuess = ({ updateGuess, value }) => {
  return (
    <input
      className="guess-input"
      value={ value }
      placeholder="Type your guess here"
      type="number"
      onChange={ updateGuess }
    />
  )
}
