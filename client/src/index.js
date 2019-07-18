import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import RootReducer from './reducers/index';
import ReduxPromise from 'redux-promise';
import { user } from './utils';
const store = createStore(RootReducer, { user }, applyMiddleware(ReduxPromise));
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
