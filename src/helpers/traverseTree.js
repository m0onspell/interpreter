import React from 'react';

const traverseTree = (componentPayload, renderer) =>
  componentPayload.map(payload => {
    const { children, component, properties, id } = payload;
    return renderer(
      component,
      properties,
      children ? traverseTree(children, renderer) : undefined,
      id,
    );
  });

export { traverseTree };
