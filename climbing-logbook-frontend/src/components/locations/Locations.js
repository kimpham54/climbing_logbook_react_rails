import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'
import Location from './Location'



class Locations extends Component{

  render() {
    const { locations, deleteLocation } = this.props;
    console.log(this.props);
    const locationList = locations.map(location => {
      return (


        <Location
            key={location.id}
            location={location}
            deleteLocation={deleteLocation}
            editLocation={this.props.editLocation}
        />
      )
    });

    return(
      <ul>
        {locationList}
      </ul>
    );
  }
};

export default Locations;
