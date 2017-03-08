import React from 'react'

const Ship = ({name, model, cost, crew, length}) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Model: {model}</p>
      <p>Cost: {cost}</p>
      <p>Crew: {crew}</p>
      <p>Opening credits money shot rating: {length}</p>
    </div>
  )
}

export default Ship