import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import makeStore from './makeStore';
import { traverseTree, renderReactReduxComponent } from './helpers';
import { componentPayload } from './data';

const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

const store = makeStore(preloadedState);

hydrate(
  <Provider store={store}>
    <App>{traverseTree(componentPayload, renderReactReduxComponent)}</App>
  </Provider>,
  document.getElementById('root'),
);
