import React from 'react'

export const NumberRange = ({ userMin, userMax, submitMinMax, minValue, maxValue }) => {
  return(
    <div>
      <input
        type="number"
        placeholder="minimum"
        value={minValue}
        onChange={userMin}
      />
      <input
        type="number"
        placeholder="maximum"
        value={maxValue}
        onChange={userMax}
      />
      <button
      className="button new-range"
      onClick={submitMinMax}
      >Submit New Range
      </button>
    </div>
  )
}
