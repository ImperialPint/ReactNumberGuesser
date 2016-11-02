import React from 'react'

export const ResetGame = ({ resetGamez }) => {
  return(
    <button
      className="button reset-button"
      onClick={ resetGamez }
    > Reset </button>
  )
}
