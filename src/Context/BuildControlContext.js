import React from 'react';

const buildControlContext = React.createContext({
  ingredients: {},
  remove: () => {},
  add: () => {},
});

export default buildControlContext;