import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
// can i import Route as another name to avoid confusion
import {getLocations} from '../actions/locations'
import Locations from '../components/locations/Locations'
import Location from '../components/locations/Location'
import LocationInput from '../components/locations/LocationInput'
import NavBar from '../components/NavBar'

class LocationsContainer extends React.Component {

  componentDidMount() {
    this.props.getLocations()
  }

  render() {
      return (
          <div>
            <NavBar/>
            <Switch>
              <Route path='/locations/new' component={LocationInput}/>
              <Route path='/locations/:id' render={(routerProps) => <Location {...routerProps} locations={this.props.locations}/>}/>
              <Route path='/locations' render={(routerProps) => <Locations {...routerProps} locations={this.props.locations}/>}/>
            </Switch>

          </div>
      )
  }
}

const mapStateToProps = state => ({ locations: state.locations })

// TODO need a mapdispatchtoprops

const mapDispatchToProps = dispatch => ({
  addLocation: text => dispatch({type: 'ADD_LOCATION', text}),
  deleteLocation: id => dispatch({type: 'DELETE_LOCATION', id})
})
// add updateLocation

export default connect(mapStateToProps, {getLocations}, mapDispatchToProps)(LocationsContainer)
// TODO three parameters here OK?
