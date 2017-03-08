import React from 'react'
import Ship from './Ship'

const ShipContainer = ({ships}) => {
  const shipNodes = ships.map((ship, index) => {
    return (
      <Ship
        key={index}
        name={ship.name}
        model={ship.model}
        cost={ship.cost_in_credits + " Credits"} />
    )
  });

  return (
    <div>
      {shipNodes}
    </div>
  );
}

export default ShipContainer;