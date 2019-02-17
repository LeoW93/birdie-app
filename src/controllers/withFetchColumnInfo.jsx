import {connect} from 'react-redux';
import lifecycle from 'recompose/lifecycle';
import compose from 'recompose/compose';
import getSelectedColumnName from '../selectors/getSelectedColumnName';
import getSelectedColumnValue from '../selectors/getSelectedColumnValue';
import getSelectedColumnData from '../selectors/getSelectedColumnData';
import getColumnDataIsLoading from '../selectors/getColumnDataIsLoading';
import {FetchColumnInfo} from '../store/async-actions';

function mapStateToProps(state) {
  return{
    column: getSelectedColumnValue(state),
    name: getSelectedColumnName(state),
    selectedColumnData: getSelectedColumnData(state),
    loading: getColumnDataIsLoading(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchColumnInfo: column => dispatch(FetchColumnInfo(column))
  };
}

export function withFetchColumnInfo(){
  return compose(
    connect(mapStateToProps, mapDispatchToProps),
    lifecycle({
      componentWillReceiveProps(nextProps) {
        if (this.props.column !== nextProps.column) {
          this.props.fetchColumnInfo(nextProps.column);
        }
      }
    })
  );
}
