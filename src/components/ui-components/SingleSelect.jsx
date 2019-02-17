import React from 'react';
import Select from 'react-select';
import {oneOfType, arrayOf, bool, string, number, object, shape, func} from 'prop-types';

const defaultStyles = {
  control: style => ({ ...style, width: 400}),
  option: style => ({ ...style, width: 400})
};

const SingleSelect = ({value, styles, onChange, options, placeholder}) => (
  <Select styles={styles} value={value} onChange={onChange} options={options} placeholder={placeholder} />
);

const optionType = shape({
  label: string.isRequired,
  value: oneOfType([string, number, bool])
});

SingleSelect.propTypes = {
  value: oneOfType([bool, string, number, object]),
  onChange: func.isRequired,
  options: arrayOf(optionType),
  placeholder: string
};

SingleSelect.defaultProps = {
  placeholder: 'Choose an option...',
  styles: defaultStyles
};




export default SingleSelect;

