import React from 'react'
import { Link } from 'react-router'


const Main = ({children}) => (
  <div>
    <h4>Main App</h4>
    <ul>
      <li><Link to='/home'>Home</Link></li>
      <li><Link to='/planets'>Planets</Link></li>
      <li><Link to='/people'>People</Link></li>
      <li><Link to='/ships'>Ships</Link></li>
      <li><Link to='/about'>About</Link></li>
    </ul>
    {children}
  </div>
)

export default Main