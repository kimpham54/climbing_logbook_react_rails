export const addRoute = (route, locationId) => {

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/locations/${locationId}/routes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(route)
    })
    .then(response => response.json())
    .then(location => {
        if (location.error) {
          alert(location.error)
        } else {
          dispatch({type: 'ADD_ROUTE', payload: location})
        }
      }
    )
  }
}



export const deleteRoute = (routeId, locationId) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/locations/${locationId}/routes/${routeId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(location => dispatch({type: 'DELETE_ROUTE', payload: location}))
  }
}

// TODO work on update