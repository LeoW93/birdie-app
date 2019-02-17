import {connect} from 'react-redux';
import {actions} from '../store/actions';
import getColumnOptions from '../selectors/getColumnOptions';
import getSelectedColumn from '../selectors/getSelectedColumn';

function mapDispatchToProps(dispatch) {
  return {
    setSelectedColumn: column => dispatch(actions.SetSelectedColumn(column))
  };
}

function mapStateToProps(state) {
  return {
    columns: getColumnOptions(state),
    selectedColumn: getSelectedColumn(state)
  };
}

export function withColumns() {
  return connect(mapStateToProps, mapDispatchToProps);
}
