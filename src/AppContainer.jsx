import React from 'react';
import App from './components/App';
import store from './store';
import ContextProviders from './Provider';

const AppContainer = () => (
  <ContextProviders store={store}>
    <App />
  </ContextProviders>
); 

export default AppContainer;

module.hot.accept();
