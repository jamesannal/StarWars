import React from 'react'
import Ship from './Ship'
import Ships from './Ships'

const ShipContainer = ({starships}) => {
  const shipNodes = starships.map((starship, index) => {
    return (
      <Ship
        key={index}
        name={starship.name}
        model={starship.model}
        cost={starship.cost_in_credits + " Credits"} 
        crew={starship.crew + " Hands"}
        length={starship.length+ " m"}/>
    )
  });

  return (
    <div>
      {shipNodes}
    </div>
  );
}

export default ShipContainer