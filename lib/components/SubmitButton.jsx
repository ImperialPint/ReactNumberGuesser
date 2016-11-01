import React from 'React'

export const SubmitButton = ({submitGuess}) => {
  return(
    <button
      type="submit"
      onClick={submitGuess}
    >Guess</button>
  )
}
