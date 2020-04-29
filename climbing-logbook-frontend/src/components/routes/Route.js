import React, { Component } from 'react';

import RouteInput from './RouteInput'


import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Route extends Component {


  handleOnClick = () => {
    this.props.deleteRoute(this.props.route.location_id, this.props.route.id)
    console.log(this.props.route.location_id, this.props.route.id)
  }

  handleEdit(data){
    data.id = this.props.route.id;
    this.props.editRoute(data);
  }


  render() {
    return (
      <div> 
        <li>
          ID: {this.props.route.location_id}
        </li>
        <li>
          NAME: {this.props.route.name}
        </li>
        <li>
          GRADE: {this.props.route.grade}
        </li>
        <li>
          TYPE: {this.props.route.climbing_type}
        </li>
        <li>
          NOTES: {this.props.route.notes}
        </li>
        <li>
          DATE: {this.props.route.climb_date}
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
          LINK: {this.props.route.url}
        </li>
        <li>
          TIMES CLIMBED: {this.props.route.times_climbed}
        </li>
        <h5>Edit</h5>
        <RouteInput addRoute={(data)=> this.handleEdit(data) } /> 
        <br/>
        <button onClick={this.handleOnClick}> Remove </button>
      </div>
    );
  }

};

export default Route;
