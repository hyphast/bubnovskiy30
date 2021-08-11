import React from 'react';

import './Error.scss';
import PropTypes from "prop-types";

const FormError = ({errors, field}) => {
  return (
    <>
        {errors && <span className='error'>{errors[field]?.message}</span>}
    </>
  );
};

FormError.propTypes = {
  errors: PropTypes.object,
  field: PropTypes.string,
}

FormError.defaultProps = {
  errors: {},
  field: '',
}

export default FormError;