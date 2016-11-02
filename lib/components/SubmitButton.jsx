import React from 'react'

export const SubmitButton = ({submitGuess, toggleDisable}) => {
  return(
    <button
      className="button submit-guess bloop"
      type="submit"
      onClick={ submitGuess }
      disabled={ toggleDisable }
    > Guess </button>
  )
}
