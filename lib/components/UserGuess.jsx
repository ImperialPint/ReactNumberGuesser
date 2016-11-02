import React from 'react'

export const UserGuess = ({ updateGuess, value }) => {
  return (
    <input
      className="input guess-input"
      value={ value }
      placeholder="Type guess here..."
      type="number"
      onChange={ updateGuess }
    />
  )
}
