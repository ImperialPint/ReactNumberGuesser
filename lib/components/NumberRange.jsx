import React from 'react'

export const NumberRange = ({ userMin, userMax, submitMinMax, minValue, maxValue, toggleRange }) => {
  return(
    <div className="number-range">
      <span> Guess a number between </span>
      <input
        className="input min-value"
        type="number"
        placeholder="minimum"
        value={ minValue }
        onChange={ userMin }
        disabled={ toggleRange }

      />
      <span> and </span>
      <input
      className="input max-value"
        type="number"
        placeholder="maximum"
        value={ maxValue }
        onChange={ userMax }
        disabled={ toggleRange }
      />
      <button
        className="button new-range"
        onClick={ submitMinMax }
        disabled={ toggleRange }
      > Submit New Range </button>
    </div>
  )
}
