import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
// can i import Route as another name to avoid confusion
import {getLocations} from '../actions/getLocations'
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
        <LocationInput addLocation={this.props.addLocation}/>
        <Locations
          locations={this.props.locations}
          deleteLocation={this.props.deleteLocation}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({ locations: state.locations })

const mapDispatchToProps = dispatch => ({
  getLocations: locations => dispatch({type: 'GET_LOCATIONS', locations}),
  addLocation: text => dispatch({type: 'ADD_LOCATION', text}),
  deleteLocation: id => dispatch({type: 'DELETE_LOCATION', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(LocationsContainer)

// TODO three parameters here OK?
// TODO need a mapdispatchtoprops
// add updateLocation



            // <Switch>
            //   <Route path='/locations/new' component={LocationInput}/>
            //   <Route path='/locations/:id' render={(routerProps) => <Location {...routerProps} locations={this.props.locations}/>}/>
            //   <Route path='/locations' render={(routerProps) => <Locations {...routerProps} locations={this.props.locations}/>}/>
            // </Switch>