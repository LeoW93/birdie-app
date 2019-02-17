import {createSelector} from 'reselect';
import getSelectedColumnValue from './getSelectedColumnValue';
import getColumnState from './getColumnState';

const getColumnData = createSelector(getColumnState, state => state.columnData);

export default createSelector(
  getColumnData,
  getSelectedColumnValue,
  (data, value) => data[value] || []
);
