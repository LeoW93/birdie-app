import React from 'react';
import ReactDOM from 'react-dom';
import App from './AppContainer';

renderApp(App);

function renderApp(AppComponent) {
  ReactDOM.render(
    <AppComponent />,
    global.window.document.getElementById('app')
  );
}

module.hot.accept();
