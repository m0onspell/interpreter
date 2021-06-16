import Express from 'express';
import React from 'react';
import path from 'path';
import { Provider } from 'react-redux';
import makeStore from './makeStore';
import { App } from './App';
import { renderToString } from 'react-dom/server';
import { template } from './template';
import { deserializeApp, mapToReduxState, renderReactReduxComponent } from './helpers';
import { componentPayload, statePayload } from './data';

const app = Express();
const port = 3000;

app.use('/static', Express.static(path.resolve(__dirname, '../static')));

app.use(handleRender);

function handleRender(req, res) {
  const { content, state } = deserializeApp(
    componentPayload,
    statePayload,
    renderReactReduxComponent,
    mapToReduxState,
  );

  const store = makeStore(state);

  const html = renderToString(
    <Provider store={store}>
      <App>{content}</App>
    </Provider>,
  );

  const preloadedState = store.getState().people;

  res.send(template(html, preloadedState));
}

app.listen(port);
