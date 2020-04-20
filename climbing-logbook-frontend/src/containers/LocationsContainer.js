import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
// can i import Route as another name to avoid confusion
import {getLocations} from '../actions/getLocations'
import {addLocation, deleteLocation, editLocation} from '../actions/locations'
import Locations from '../components/locations/Locations'
import Location from '../components/locations/Location'
import LocationInput from '../components/locations/LocationInput'
import NavBar from '../components/NavBar'

class LocationsContainer extends React.Component {

  componentDidMount() {
    this.props.getLocations()
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <NavBar/>
        <LocationInput addLocation={this.props.addLocation}/>
        <br/>
        <Locations
          locations={this.props.locations}
          deleteLocation={this.props.deleteLocation}
          editLocation={this.props.editLocation}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({ locations: state.locations })

const mapDispatchToProps = dispatch => ({
  getLocations: () => getLocations()(dispatch),
  addLocation: data => addLocation(data)(dispatch),
  deleteLocation: id => deleteLocation(id)(dispatch),
  editLocation: data => editLocation(data)(dispatch)
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