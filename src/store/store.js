// src/store/store.js
import { createStore } from 'redux';
import reducers from './reducers';

// Create the Redux store using the reducer
const store = createStore(reducers);

export default store;
