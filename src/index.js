import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers/reducers';
import {watchForLoadTweets} from './sagas/index.sagas';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'antd/dist/antd.css';

const sagaMiddleware = createSagaMiddleware(watchForLoadTweets);

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchForLoadTweets);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
