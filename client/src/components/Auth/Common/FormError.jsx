import React from 'react';

import './Error.scss';

const FormError = ({errors, field}) => {
  return (
    <>
        {errors[field] && <span className='error'>{errors[field].message}</span>}
    </>
  );
};

export default FormError;