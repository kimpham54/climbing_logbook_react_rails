import React, { Component } from 'react';
import RouteInput from '../components/routes/RouteInput'
import Routes from '../components/routes/Routes'
import { connect } from 'react-redux'
import {addRoute, deleteRoute, editRoute} from '../actions/routes'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
// import {getRoutes} from '../actions/getRoutes'

class RoutesContainer extends Component {

  // componentDidMount() {
  //   console.log('mount test')
  //   this.props.getRoutes()
  // }


  render() {
    return (
      <div>

          <Accordion>
            <Card style={{ width: '30rem' }}>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <Button variant="warning"> Add Route </Button>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body> 

                <RouteInput
                  addRoute={this.props.addRoute}
                  routelocationId={this.props.location.id}
                />

                </Card.Body>
              </Accordion.Collapse>
            </Card>
            
          </Accordion>

          <Accordion>
            <Card style={{ width: '30rem' }}>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <Button variant="warning"> View Routes </Button>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body> 

                <Routes
                  routes={this.props.location.routes}
                  locationId={this.props.location.id}
                  deleteRoute={this.props.deleteRoute}
                />

                </Card.Body>
              </Accordion.Collapse>
            </Card>
            
          </Accordion>


      </div>
    );
  }
}

// const mapStateToProps = state => ({ routes: state.locations.routes })
const mapStateToProps = () => ({})

// ({routes}) => {  return {routes}}

const mapDispatchToProps = dispatch => ({
  // getRoutes: () => getRoutes()(dispatch),
  
  // addRoute: route => dispatch({type: 'ADD_ROUTE', route}),
  addRoute: routedata => addRoute(routedata)(dispatch),
  deleteRoute: (data, data2) => deleteRoute(data, data2)(dispatch)
  // dispatch({type: 'DELETE_ROUTE', id})
  // editRoute: data => editRoute(data)(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(RoutesContainer)
