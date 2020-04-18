import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import './index.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk),
  // other store enhancers if any
));
// I used 1.3 not 1.2 https://github.com/zalmoxisus/redux-devtools-extension#installation
// store is where store data globally, reducer tells us what to do with a store based on certain action. send action object to reducer dispatch, take object reducer based on conditions decide what want to update on current store, reducer return new store

ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>,
	document.getElementById('root')
	);