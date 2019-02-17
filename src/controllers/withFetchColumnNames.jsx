import lifecycle from 'recompose/lifecycle';
import compose from 'recompose/compose';
import {connect} from 'react-redux';
import {FetchColumns} from '../store/async-actions';

function mapDispatchToProps(dispatch) {
  return {
    fetchColumnNames: () => dispatch(FetchColumns())
  };
}

export function withFetchColumnNames() {
  return compose(
    connect(null, mapDispatchToProps),
    lifecycle({
      componentDidMount: function() {
        this.props.fetchColumnNames();
      }
    })
  );
}
