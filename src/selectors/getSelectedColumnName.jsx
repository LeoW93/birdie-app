import {createSelector} from 'reselect';
import getSelectedColumn from './getSelectedColumn';
import Case from 'case';

export default createSelector(getSelectedColumn, column => column && Case.sentence(column.label));
