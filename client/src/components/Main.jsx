import React from 'react'
import { Link } from 'react-router'

const Main = ({children}) => (
  <div>
    <h4>Main App</h4>
    <ul>
      <li><Link to='/home'</Link></li>
      <li><Link to='/planets'</Link></li>
      <li><Link to='/people'</Link></li>
      <li><Link to='/ships'</Link></li>
    </ul>
    {children}
  </div>
)

export default Main