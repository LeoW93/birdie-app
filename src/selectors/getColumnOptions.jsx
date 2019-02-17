import {createSelector} from 'reselect';
import getColumnNames from './getColumnNames';
import Case from 'case';

export default createSelector(getColumnNames, names => names.map(name => ({label: Case.sentence(name), value: name})));