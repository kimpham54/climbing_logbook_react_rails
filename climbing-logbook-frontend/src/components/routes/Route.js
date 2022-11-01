import React, { Component } from 'react';

import RouteInput from './RouteInput'


import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';


class Route extends Component {


  handleOnClick = () => {
    this.props.deleteRoute(this.props.route.location_id, this.props.route.id)
    console.log(this.props.route.location_id, this.props.route.id)
  }

  handleEdit(data) {
    data.id = this.props.route.id;
    this.props.editRoute(data);
  }


  render() {
    return (
      <div>
        <li>
          Route Number: {this.props.route.location_id}
        </li>
        <li>
          Route Name: {this.props.route.name}
        </li>
        <li>
          Grade: {this.props.route.grade}
        </li>
        <li>
          Climbing Style: {this.props.route.climbing_type}
        </li>
        <li>
          Notes: {this.props.route.notes}
        </li>
        <li>
          Date: {this.props.route.climb_date}
        </li>
        <li>
          <Container>
            <Row>
              <Col xs={5} md={5}>
                <Image src={this.props.route.image} fluid />
              </Col>
            </Row>
          </Container>
        </li>
        <li>
          External Route Link: <a href={this.props.route.url}>Mountain Project</a>
        </li>
        <li>
          # Times Climbed: {this.props.route.times_climbed}
        </li>
        <Button variant="info">Edit</Button>

      </div>
    );
  }

};

export default Route;
