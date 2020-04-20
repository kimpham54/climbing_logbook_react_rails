import {getLocations} from '../actions/getLocations'
export const addLocation = (data) => {

  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/locations', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(location => dispatch({type: 'ADD_LOCATION', payload: location}))
  }

}


export const deleteLocation = (locationId) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/locations/${locationId}`, {
      method: 'DELETE'
    })
    .then(location => getLocations()(dispatch))
  }
}


export const editLocation = (data) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/locations/${data.id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(location => dispatch({type: 'EDIT_LOCATION', payload: location}))
  }
}






