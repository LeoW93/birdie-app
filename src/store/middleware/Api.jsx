import axios from 'axios';
import isFunction from 'lodash/isFunction';
import {actionTypes} from '../actions';

const ApiMiddleware = store => next => action => {
  let {dispatch} = store;
  
  if (action.type === actionTypes.FETCH_RESOURCE_START) {
    let {method, body, endpoint, onStart, onSuccess, onError} = action.payload;

    if (isFunction(onStart)) {
      onStart(dispatch);
    }
    axios({
      method: method || 'GET',
      body,
      url: endpoint,
      data: body
    }).then(response => {
      if (isFunction(onSuccess)) {
        onSuccess(response, dispatch);
      }
    }).catch(response => {
      if(isFunction(onError)) {
        onError(response, dispatch);
      }
    });
  }

  return next(action);
};

export default ApiMiddleware;