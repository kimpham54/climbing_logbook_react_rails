import React, { Component } from 'react';
import Route from './Route';

class Routes extends Component {

  render() {

    const { routes, locationId, deleteRoute } = this.props;
    console.log(this.props);
    const associatedRoutes = routes.filter( route => { 
      // console.log(routes, route.location_id, locationId); 
      return route.location_id == locationId
    });
    console.log(associatedRoutes)

    
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
