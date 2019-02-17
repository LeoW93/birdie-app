import {createSelector} from 'reselect';
import getColumnState from './getColumnState';

export default createSelector(getColumnState, state => state.selectedColumn);