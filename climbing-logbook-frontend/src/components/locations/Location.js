import React, { Component } from 'react';
import RoutesContainer from '../../containers/RoutesContainer'
import LocationInput from './LocationInput'

class Location extends Component {

  handleOnClick() {
    this.props.deleteLocation(this.props.location.id);
  }

  handleEdit(data){
    data.id = this.props.location.id;
    this.props.editLocation(data);
  }



  render() {
    const { location } = this.props;

console.log(this.props);

    return (
      <div>
        <li>
          {location.placename}
          <br/>
          {location.coordinates}
          <br/>
          {location.country}
          <br/>
          {location.city}
          <br/>
          {location.image}
          <br/>
          {location.climbs_total}
          <br/>
          <button onClick={() => this.handleOnClick()}> X </button>
          <button onClick={() => this.handleOnClick()}> Edit </button>
          <LocationInput addLocation={(data)=> this.handleEdit(data) } />
          <RoutesContainer location={location}/>
        </li>
      </div>
    );
  }
};

export default Location;
