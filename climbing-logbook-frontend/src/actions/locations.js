export function getLocations(){
  return (dispatch) => {
	fetch('http://localhost:3000/api/v1/locations/')
	.then(resp => resp.json())
  .then(data => dispatch({
    type: 'GET_LOCATIONS',
    payload: locations
  }))
}
}
	// .then(data => console.log(data))


export const addAccount = (data) => {

  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/accounts', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(account => dispatch({type: 'ADD_ACCOUNT', payload: account}))
  }

}

export const editAccount = (data) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/accounts/${data.id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(account => dispatch({type: 'EDIT_ACCOUNT', payload: account}))
  }
}






