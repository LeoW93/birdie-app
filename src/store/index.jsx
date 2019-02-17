import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
// import ReduxFetchResource from './middleware/ReduxFetchResource';
import Logger from './middleware/Logger';
import thunk from 'redux-thunk';
import ApiMiddleware from './middleware/Api';

export default createStore(
  reducer,
  {},
  composeMiddleware()
);


function composeMiddleware() {
  let middleware = [
    thunk,
    ApiMiddleware
    // ReduxFetchResource
  ];

  if (process.env.NODE_ENV === 'development') {
    middleware.push(Logger);
  }

  return applyMiddleware(...middleware);
}