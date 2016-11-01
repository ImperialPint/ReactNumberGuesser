import React from 'react'

export const SubmitButton = ({submitGuess}) => {
  return(
    <button
      type="submit"
      onClick={submitGuess}
    >Guess</button>
  )
}
