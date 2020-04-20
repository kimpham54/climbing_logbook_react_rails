import React, { Component } from 'react';
import Route from './Route';

class Routes extends Component {

  render() {

    const { routes, locationId, deleteRoute } = this.props;
    const associatedRoutes = routes.filter(route => route.locationId === locationId);
    
    const routeList = associatedRoutes.map((route, index) => {
      return <Route key={index} route={route} deleteRoute={deleteRoute} />
    })

    return (
      <div>
        <ul>
          {routeList}
        </ul>
      </div>
    );
  }

};

export default Routes;
