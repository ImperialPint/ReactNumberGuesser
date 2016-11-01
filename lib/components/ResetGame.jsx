import React from 'react'

export const ResetGame = ({ resetGamez }) => {
  return(
    <button
      className="delete-button"
      onClick={resetGamez}
    > Reset
    </button>
  )
}
