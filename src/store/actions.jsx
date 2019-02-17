export const actionTypes = {
  SET_COLUMN_NAMES: 'SET_COLUMN_NAMES',
  SET_COLUMN_NAMES_ERROR: 'SET_COLUMN_NAMES_ERROR',
  SET_COLUMNS_LOADING: 'SET_COLUMNS_LOADING',
  SET_SELECTED_COLUMN: 'SET_SELECTED_COLUMN',

  SET_COLUMN_INFO_LOADING: 'SET_COLUMN_INFO_LOADING',
  SET_COLUMN_INFO: 'SET_COLUMN_INFO',

  FETCH_RESOURCE_START: 'FETCH_RESOURCE_START',
  SET_RESOURCE_LOADING: 'SET_RESOURCE_LOADING',
  FETCH_RESOURCE_SUCCESS: 'FETCH_RESOURCE_SUCCESS',
  FETCH_RESOURCE_ERROR: 'FETCH_RESOURCE_ERROR'
};

export const actions = {
  SetColumnNames: names => ({
    type: actionTypes.SET_COLUMN_NAMES,
    payload: names
  }),
  SetColumnsNamesError: message => ({
    type: actionTypes.SET_COLUMN_NAMES_ERROR,
    payload: message
  }),
  SetColumnsLoading: payload => ({
    type: actionTypes.SET_COLUMNS_LOADING,
    payload
  }),
  SetSelectedColumn: column => ({
    type: actionTypes.SET_SELECTED_COLUMN,
    payload: column
  }),
  SetColumnInfoLoading: payload => ({
    type: actionTypes.SET_COLUMN_INFO_LOADING,
    payload
  }),
  SetColumnInfo: (column, info) => ({
    type: actionTypes.SET_COLUMN_INFO,
    payload: info,
    meta: {key: column}
  }),
  SetColumnsInfoError: message => ({
    type: actionTypes.SET_COLUMN_NAMES_ERROR,
    payload: message
  }),
  FetchResourceStart: options => ({
    type: actionTypes.FETCH_RESOURCE_START,
    payload: {
      method: options.method,
      body: options.body,
      endpoint: options.endpoint,
      onStart: options.onStart,
      onSuccess: options.onSuccess,
      onError: options.onError
    }
  }),
  SetResourceLoading: payload => ({
    type: actionTypes.SET_RESOURCE_LOADING,
    payload
  }),
  FetchResourceSuccess: payload => ({
    type: actionTypes.FETCH_RESOURCE_SUCCESS,
    payload
  }),
  FetchResourceError: payload => ({
    type: actionTypes.FETCH_RESOURCE_ERROR,
    payload
  })
};
