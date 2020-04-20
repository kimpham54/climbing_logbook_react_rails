import React, { Component } from 'react';


import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Route extends Component {


  handleOnClick = () => {
    this.props.deleteRoute(this.props.route.location_id, this.props.route.id)
    console.log(this.props.route.location_id, this.props.route.id)
  }


  render() {
    return (
      <div> 
        <li>
          {this.props.route.location_id}
        </li>
        <li>
          {this.props.route.name}
        </li>
        <li>
          {this.props.route.grade}
        </li>
        <li>
          {this.props.route.climbing_type}
        </li>
        <li>
          {this.props.route.notes}
        </li>
        <li>
          {this.props.route.climb_date}
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
          {this.props.route.url}
        </li>
        <li>
          {this.props.route.times_climbed}
        </li>
        <button onClick={this.handleOnClick}> Remove </button>
      </div>
    );
  }

};

export default Route;
