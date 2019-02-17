import {createSelector} from 'reselect';
import getColumnState from './getColumnState';

const getColumnNames = createSelector(getColumnState, state => state.columnNames);

export default getColumnNames;