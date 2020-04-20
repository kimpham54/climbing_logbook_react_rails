export function getLocations() {
  return (dispatch) => {
  fetch('http://localhost:3000/api/v1/locations')
  .then(resp => resp.json())
  .then(data => console.log(data))
  .then(locations => dispatch({
    type: 'GET_LOCATIONS', payload: locations}))
}
}
	// .then(data => console.log(data))

  // , {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     method: 'GET',
  //     body: JSON.stringify(girl)
  //   }