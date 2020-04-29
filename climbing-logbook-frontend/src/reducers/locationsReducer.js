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
      console.log(action.payload)
      console.log(state.locations)
      let selectedLocation = state.locations.find(location => {
        if (location.id == action.payload.location_id) {
          console.log(location.routes)
          return location.routes}})

      console.log(selectedLocation)
      let selectedRoute = selectedLocation.routes.find(route => {
            console.log(route.id, action.payload.id)
            if (route.id == action.payload.id) 
              { 
                return true 
              }})
      console.log(selectedRoute)

      selectedRoute.climb_date = action.payload.climb_date
      selectedRoute.climbing_type = action.payload.climbing_type
      selectedRoute.grade = action.payload.grade
      selectedRoute.image = action.payload.image
      selectedRoute.name = action.payload.name
      selectedRoute.notes = action.payload.notes
      selectedRoute.times_climbed = action.payload.times_climbed
      selectedRoute.url = action.payload.url

      return {...state}



    default:
      return state
  }
}