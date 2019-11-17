import './CustomInput.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { Input, Label, FormFeedback, FormGroup } from 'reactstrap';

const CustomInput = ({ invalid, type, error, label, showLabel, onChange, value }) => {
  return (
    <FormGroup>
      {showLabel && (
        <Label for={label} className='custom-input__label'>
          {label}
        </Label>
      )}
      <Input
        type={type}
        name={label}
        id={label}
        value={value}
        onChange={onChange}
        invalid={invalid}
      />
      {invalid && <FormFeedback>{error.msg}</FormFeedback>}
    </FormGroup>
  );
};

CustomInput.propTypes = {
  invalid: PropTypes.bool,
  error: PropTypes.object,
  label: PropTypes.string,
  value: PropTypes.string,
  showLabel: PropTypes.bool,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

CustomInput.defaultProps = {
  type: 'text',
};

export default CustomInput;
