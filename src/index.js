import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './containers/App';
import './index.css';
import promiseMiddlware from 'redux-promise';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers'

const createStoreWithMiddlware = applyMiddleware(promiseMiddlware)(createStore)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={createStoreWithMiddlware(reducers)}>
      <App />
  </Provider>
    
);

