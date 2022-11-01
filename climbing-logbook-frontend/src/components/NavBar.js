import React from 'react'
import { Route, Link, BrowserRouter } from 'react-router-dom'
import Location from '../components/locations/Location'
import LocationInput from '../components/locations/LocationInput'
import Locations from '../components/locations/Locations'



const NavBar = (props) => {

  return (
    <div>
      <BrowserRouter>
        <Link to='/locations' style={{ paddingRight: '10px' }}>Locations</Link>
        <Link to='/locations/new'>Add a Location</Link>
        <Link to='/dog'>Add Dog</Link>
        <Route exact path='/dog' render={(routeProps) =>
          <div>
            hello</div>
        } />
      </BrowserRouter>


    </div>


  )
}

export default NavBar;