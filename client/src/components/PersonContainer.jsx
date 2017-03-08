import React from 'react'
import Person from './Person.jsx'

const PersonContainer = ({people}) => {
  const personNodes = people.map((person, index) => {
    return (
      <Person
        key={index}
        name={person.name}
        height={person.height + "cm"}
        mass={person.mass + "kg"}
        gender={person.gender}/>
    )
  });

  return (
    <div>
      {personNodes}
    </div>
  );
}

export default PersonContainer