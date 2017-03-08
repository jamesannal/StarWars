import React from 'react'

const Planet = ({name, population, climate, terrain}) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Population: {population}</p>
      <p>Climate: {climate}</p>
      <p>Terrain: {terrain}</p>
    </div>
  )
}

export default Planet