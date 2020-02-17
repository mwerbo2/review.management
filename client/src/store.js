import { createStore, applyMiddleware } from 'redux';
// Chrome console debugging for redux
import { composeWithDevTools } from 'redux-devtools-extension';
// All
import thunk from 'redux-thunk'
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;

