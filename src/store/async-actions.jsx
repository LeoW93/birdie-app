import {actions} from './actions';

export const FetchColumns = () => actions.FetchResourceStart({
  endpoint: '/get-columns',
  onStart: (dispatch) => dispatch(actions.SetColumnsLoading(true)),
  onSuccess: (body, dispatch) => {
    dispatch(actions.SetColumnNames(body.data));
    dispatch(actions.SetColumnsLoading(false));
  },
  onError: (response, dispatch) => {
    dispatch(actions.SetColumnsNamesError(response));
    dispatch(actions.SetColumnsLoading(false));
  }
});

export const FetchColumnInfo = column => actions.FetchResourceStart({
  method: 'POST',
  body: {
    column
  },
  endpoint: '/get-column-info',
  onStart: (dispatch) => dispatch(actions.SetColumnInfoLoading(true)),
  onSuccess: (body, dispatch) => {
    dispatch(actions.SetColumnInfo(column, body.data));
    dispatch(actions.SetColumnInfoLoading(false));
  },
  onError: (response, dispatch) => {
    dispatch(actions.SetColumnInfoError(response));
    dispatch(actions.SetColumnInfoLoading(false));
  }
});
