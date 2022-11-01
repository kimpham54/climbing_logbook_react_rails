import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import locationsReducer from './reducers/locationsReducer';
import 'bootstrap/dist/css/bootstrap.css';

// import routesReducer from './reducers/routesReducer';

// const rootReducer = combineReducers({
//   locations: locationsReducer,
//   routes: routesReducer
// })

// https://learn.co/tracks/online-software-engineering-structured/redux/redux-library/combine-reducers-codealong

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(locationsReducer, /* preloadedState, */ composeEnhancers(
	applyMiddleware(thunk)
));

// const store = createStore(locationsReducer, composeWithDevTools(
//   applyMiddleware(thunk),
// ));


// I used 1.3 not 1.2 https://github.com/zalmoxisus/redux-devtools-extension#installation
// store is where store data globally, reducer tells us what to do with a store based on certain action. send action object to reducer dispatch(action), take object reducer based on conditions decide what want to update on current store, reducer return new store


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)