import {combineReducers} from 'redux';
import {actionTypes} from './actions';

const columns = combineReducers({
  columnNames: function(state = [], action) {
    return action.type === actionTypes.SET_COLUMN_NAMES ? action.payload : state;
  },

  columnNamesError: function(state = null, action) {
    return action.type === actionTypes.SET_COLUMN_NAMES_ERROR ? action.payload : state;
  },

  columnsAreLoading: function(state =false, action){
    return action.type === actionTypes.SET_COLUMNS_LOADING ? action.payload : state;
  },

  selectedColumn: function(state = null, action) {
    return action.type === actionTypes.SET_SELECTED_COLUMN ? action.payload : state;
  },

  columnData: function(state = {}, action) {
    return action.type === actionTypes.SET_COLUMN_INFO ? addColumnData(state, action) : state;
  },

  columnDataIsLoading: function(state = false, action) {
    return action.type === actionTypes.SET_COLUMN_INFO_LOADING ? action.payload : state;
  }
});

function addColumnData(state, action) {
  return state[action.meta.key] ? {...state[action.meta.key], ...action.payload} : {...state, [action.meta.key]: action.payload}; 
}

export default combineReducers({columns});