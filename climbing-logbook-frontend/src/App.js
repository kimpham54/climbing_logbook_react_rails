import React from 'react';
// import logo from './logo.svg';
// import './archived-App.css';
import { connect } from 'react-redux';
import { locations } from './actions/locations';
import LocationsContainer from './containers/LocationsContainer';

import background from "./img/m.jpg";


class App extends React.Component {

  render() {
    return (
      <div className="App" style={{
        backgroundRepeat: 'fixed',
        backgroundImage: `url(${background})`,
        backgroundAttachment: 'fixed',
        width: '1400px'
      }
      }><div className="girl" style={{

        width: '1400px'
      }
      }>
          <LocationsContainer /></div>
      </div >
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