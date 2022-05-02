import React, { FC } from 'react'
import './Error.scss'

type PropsType = {
  errors: any
  field: string
}

const FormError: FC<PropsType> = ({ errors, field }) => {
  return (
    <>
      {errors[field] && <span className="error">{errors[field].message}</span>}
    </>
  )
}

FormError.defaultProps = {
  errors: {},
  field: '',
}

export default FormError
