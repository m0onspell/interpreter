import React from 'react';

const mapProps = propsData => {
  const keys = Object.keys(propsData);
  const props = {};

  keys.forEach(key => {
    const { arguments: args, type, value } = propsData[key];
    switch (type) {
      case 'stateReference':
        props[`${key}Reference`] = value;
        break;
      case 'function':
        // not sure what should be the exact way in which I was supposed to map function call to parameters,
        // but with given dataset, this will work.
        props[key] = () => value(...args.map(({ value }) => value));
        break;
      default:
        props[key] = value;
    }
  });

  return props;
};

const renderReactReduxComponent = (Component, props, children, id) => (
  <Component key={id} {...(props ? mapProps(props) : {})}>
    {children}
  </Component>
);

export { renderReactReduxComponent };
