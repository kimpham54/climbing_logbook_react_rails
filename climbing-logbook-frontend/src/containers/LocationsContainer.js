import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
// can i import Route as another name to avoid confusion
import {getLocations} from '../actions/getLocations'
import {addLocation, deleteLocation, editLocation} from '../actions/locations'
import Locations from '../components/locations/Locations'
import Location from '../components/locations/Location'
import LocationInput from '../components/locations/LocationInput'
import NavBar from '../components/NavBar'

class LocationsContainer extends React.Component {

  componentDidMount() {
    this.props.getLocations();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <NavBar/>
        <BrowserRouter>
        <Switch>
        <Route path='/locations/new' render={(routeProps) =>
        <LocationInput {...routeProps}
        addLocation={this.props.addLocation}/> }/>
        <Route path='/locations/' render={(routeProps) =>
          <Locations  {...routeProps}
          locations={this.props.locations}
          deleteLocation={this.props.deleteLocation}
          editLocation={this.props.editLocation}
        />
        } />
        </Switch>
        </BrowserRouter>
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
