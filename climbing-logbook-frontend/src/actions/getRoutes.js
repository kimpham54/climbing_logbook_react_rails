export function getRoutes() {
console.log('test')
  return (dispatch) => {
  fetch('http://localhost:3000/api/v1/routes')
  .then(resp => {console.log(resp); return resp.json()})
  .then(routes => {console.log(routes); return dispatch({
    type: 'GET_ROUTES', payload: routes})})
}
}
