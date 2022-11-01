import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Location from './Location';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';





class Locations extends Component {

  render() {
    const { locations, deleteLocation } = this.props;
    console.log(this.props);
    const locationList = locations.map(location => {
      return (

        // pass down props to location chaining
        <ListGroup horizontal>
          <ListGroup.Item>
            <Location
              key={location.id}
              location={location}
              deleteLocation={deleteLocation}
              editLocation={this.props.editLocation}></Location>
          </ListGroup.Item>
        </ListGroup>
      )
    });

    return (
      <ul>
        {locationList}
      </ul >
    );
  }
};

export default Locations;
