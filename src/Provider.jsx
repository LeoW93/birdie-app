import React from 'react';
import {Provider} from 'react-redux';

const ContextProviders = ({store, children}) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export default ContextProviders;
