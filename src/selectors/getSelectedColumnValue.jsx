import {createSelector} from 'reselect';
import getSelectedColumn from './getSelectedColumn';

export default createSelector(getSelectedColumn, column => column && column.value);
