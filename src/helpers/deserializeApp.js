import React from 'react';
import { traverseTree } from './traverseTree';

const deserializeApp = (
  componentPayload,
  statePayload,
  // Will the next two parameters accomplish "keep this function itself framework agnostic
  // while also specifying that components be rendered using react and state be setup using redux" part?
  renderer,
  stateParser,
) => {
  return {
    content: traverseTree(componentPayload, renderer),
    state: stateParser(statePayload),
  };
};

export { deserializeApp };
