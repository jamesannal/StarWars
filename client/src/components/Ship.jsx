import React from 'react'

const Ship = ({name, model, cost}) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Model: {model}</p>
      <p>Cost: {cost}</p>
    </div>
  )
}

export default Ship