import { createStore } from 'redux';
import reducers from './state/reducer/index';

// Create the Redux store and enable the Redux DevTools Extension
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
