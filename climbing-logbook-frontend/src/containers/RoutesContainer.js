import React, { Component } from 'react';
import RouteInput from '../components/routes/RouteInput'
import Routes from '../components/routes/Routes'
import { connect } from 'react-redux'

class RoutesContainer extends Component {
  render() {
    return (
      <div>
        <RouteInput
          addRoute={this.props.addRoute}
          locationId={this.props.location.id}
        />
        <Routes
          routes={this.props.routes}
          locationId={this.props.location.id}
          deleteRoute={this.props.deleteRoute}
        />
      </div>
    );
  }
}

const mapStateToProps = ({routes}) => {
  return {routes}
}

const mapDispatchToProps = dispatch => ({
  addRoute: route => dispatch({type: 'ADD_ROUTE', route}),
  deleteRoute: id => dispatch({type: 'DELETE_ROUTE', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(RoutesContainer)
