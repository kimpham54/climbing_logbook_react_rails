import React, { Component } from 'react';
import RoutesContainer from '../../containers/RoutesContainer'

class Location extends Component {

  handleOnClick() {
    this.props.deleteLocation(this.props.location.id);
  }

  render() {
    const { location } = this.props;

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
          <RoutesContainer location={location}/>
        </li>
      </div>
    );
  }
};

export default Location;
