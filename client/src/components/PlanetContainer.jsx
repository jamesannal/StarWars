import React from 'react'
import Planet from './Planet'

const PlanetContainer = ({planets}) => {
  const planetNodes = planets.map((planet, index) => {
    return (
      <Planet
        key={index}
        name={planet.name}
        population={planet.population}
        climate={planet.climate} 
        terrain={planet.terrain}/>
    )
  });

  return (
    <div>
      {planetNodes}
    </div>
  );
}

export default PlanetContainer