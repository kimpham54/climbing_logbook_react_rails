import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { connect } from 'react-redux';
import { locations } from './actions/locations';
import LocationsContainer from './containers/LocationsContainer';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <LocationsContainer/>
      </div>
    );
  }
}


export default App;


// componentDidMount() {
	// 	fetch('http://localhost:3000/api/v1/locations/')
	// 	.then(resp => resp.json())
	// 	.then(data => console.log(data))
	// }
// mapstatetoprops gives access valuues in store as props
// second parameter mapdispatch gives us ability to dispatch new actions to whatever's in store from our component