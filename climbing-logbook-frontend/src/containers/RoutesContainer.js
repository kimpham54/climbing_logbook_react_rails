import React, { Component } from 'react';
import RouteInput from '../components/routes/RouteInput'
import Routes from '../components/routes/Routes'
import { connect } from 'react-redux'
// import {getRoutes} from '../actions/getRoutes'

class RoutesContainer extends Component {

  // componentDidMount() {
  //   console.log('mount test')
  //   this.props.getRoutes()
  // }


  render() {
    return (
      <div>
        <RouteInput
          addRoute={this.props.addRoute}
          locationId={this.props.location.id}
        />
        <Routes
          routes={this.props.location.routes}
          locationId={this.props.location.id}
          deleteRoute={this.props.deleteRoute}
        />
      </div>
    );
  }
}

// const mapStateToProps = state => ({ routes: state.locations.routes })
const mapStateToProps = () => ({})

// ({routes}) => {  return {routes}}

const mapDispatchToProps = dispatch => ({
  // getRoutes: () => getRoutes()(dispatch),
  addRoute: route => dispatch({type: 'ADD_ROUTE', route}),
  deleteRoute: id => dispatch({type: 'DELETE_ROUTE', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(RoutesContainer)
