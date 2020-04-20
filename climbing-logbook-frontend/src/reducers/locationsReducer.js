// a reducer is a regular function
// first time pass through blank state. every other time passing through previous state so use {} object instead of [] array for safety state consistency easier to update


export default function locationsReducer(state = {
  locations: [],
  routes: []
}, action) {
  switch (action.type) {
   
    case 'GET_LOCATIONS':
      return {locations: action.payload}

    // case 'GET_ROUTES':
    //   return {routes: action.payload}
   
    case 'ADD_LOCATION':
    return {
      ...state,
      locations: [ ...state.locations, action.payload]
    }
   
    // case 'DELETE_LOCATION':
    //   let locationsTwo = state.locations.map(location => {
    //     if (location.id == action.payload.id) {
    //       return action.payload
    //     } else {
    //       return location
    //     }
    //   })
    //   return {...state, locations: locationsTwo}
   
    case 'EDIT_LOCATION':
      let locationsThree = state.locations.map(location => {
        if (location.id == action.payload.id) {
          return action.payload
        } else {
          return location
        }
      })
      return {...state, locations: locationsThree}


      case 'ADD_ROUTE':
      let locations = state.locations.map(location => {
        if (location.id == action.payload.id) {
          return action.payload
        } else {
          return location
        }
      })
      return {...state, locations: locations}


      // case 'DELETE_ROUTE':
      // // something
      // return {...state, locations: locations}
  

      case 'EDIT_ROUTE':
      // something
      return {...state, locations: locations}

    default:
      return state
  }
}