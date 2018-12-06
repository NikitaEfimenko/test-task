import React from 'react';
import {render} from 'react-dom';
import App from './containers/App';
import 'bootstrap/dist/css/bootstrap.css'

import { reducer } from './reducers'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const store = createStore(
	reducer, 
	applyMiddleware(thunk)
)

store.subscribe(() => {
	console.log(store.getState())
	//simple browser logger
})

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
	);
