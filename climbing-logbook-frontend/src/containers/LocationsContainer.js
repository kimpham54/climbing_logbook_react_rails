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
    console.log("getlocations");
  }


  render() {
    console.log(this.props);
    console.log("render container");
    return (
      <div>
       
      <BrowserRouter>
      <Link to='/locations' style={{paddingRight: '10px'}}>Locations</Link>
      <Link to='/locations/new'>Add Location</Link>

        <Route exact path='/locations/new' render={(routeProps) =>
        <LocationInput {...routeProps}
        addLocation={this.props.addLocation}/> }/>
        <Route exact path='/locations' render={(routeProps) =>
          <div>
          <Locations  {...routeProps}
          locations={this.props.locations}
          deleteLocation={this.props.deleteLocation}
          editLocation={this.props.editLocation}
        /></div>
        } />
        
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
