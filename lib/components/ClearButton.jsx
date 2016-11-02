import React from 'react'

export const ClearButton = ({ clear, toggleDisable }) => {
  return (
    <button
      className="button clear-button bloop"
      onClick={ clear }
      disabled={ toggleDisable }
    > Clear </button>
  )
}
