import React from 'react'
import {Route, Link, BrowserRouter} from 'react-router-dom'



const NavBar = (props) => {

  return (
    <div>
    <BrowserRouter>
      <Link to='/locations' style={{paddingRight: '10px'}}>Locations</Link>
      <Link to='/locations/new'>Add Location</Link>
    </BrowserRouter>


    </div>

  
  )
}

export default NavBar;