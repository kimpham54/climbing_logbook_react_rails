import {getLocations} from '../actions/getLocations'

export const addRoute = (data) => {
  console.log(data)
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/locations/${data.location_id}/routes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
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



export const deleteRoute = (locationid, routeid) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/routes/${routeid}`, {
      method: 'DELETE'
    })
    // .then(response => response.json())
    .then(location => getLocations()(dispatch))
  }
}
// not using locationid, http://localhost:3000/api/v1/locations/${locationid}/routes/${routeid}

export const editRoute = (data) => {
  console.log(data)
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/locations/${data.locationId}/routes/${data.id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(route => dispatch({type: 'EDIT_ROUTE', payload: route}))
  }
}

