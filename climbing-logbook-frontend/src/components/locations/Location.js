import React, { Component } from 'react';
import RoutesContainer from '../../containers/RoutesContainer'
import LocationInput from './LocationInput'

import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'


class Location extends Component {

  handleOnClick() {
    this.props.deleteLocation(this.props.location.id);
  }

  handleEdit(data) {
    data.id = this.props.location.id;
    this.props.editLocation(data);
  }



  render() {
    const { location } = this.props;
    const divStyle = {
      backgroundColor: "fff",
      padding: "10px"
    };

    console.log(this.props);

    return (



      <div className="position-relative top-0 start-100 translate-middle" style={divStyle} >
        <CardGroup style={{ width: '40rem' }}>
          <Card>
            <Card.Img style={{ width: '30rem' }} variant="top" src={location.image} />
            <Card.Body>
              <Card.Title>{location.placename}</Card.Title>
              <Card.Text>
                Cooordinates: {location.coordinates}
                <br />
                Country: {location.country}
                <br />
                City: {location.city}
                <br />
                Total Times Climbed: {location.climbs_total}
                <br />
              </Card.Text>

              <Accordion>
                <Card style={{ width: '30rem' }}>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      <Button variant="info">Edit</Button>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <LocationInput addLocation={(data) => this.handleEdit(data)} />
                      <button onClick={() => this.handleOnClick()}>Remove </button>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>

            </Card.Body>
            <Card.Footer>
              <RoutesContainer location={location} />
            </Card.Footer>

          </Card>
        </CardGroup>
      </div>
    );
  }
};

export default Location;
