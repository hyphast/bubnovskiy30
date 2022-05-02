import React, { FC } from 'react'
import { Form, Input } from 'antd'
import FormError from '../Error/FormError'
import { useController } from 'react-hook-form'

type PropsType = {
  errors: any
  field: string
  control: any
  placeholder: string
  inputPassword?: boolean
  type?: string
  className?: string
  prefix?: React.ReactNode
}

const InputController: FC<PropsType> = ({
  errors,
  field,
  control,
  ...restProps
}) => {
  const { field: input } = useController({ name: field, control })
  const { inputPassword, ...rest } = restProps
  return (
    <Form.Item validateStatus={errors[field] ? 'error' : ''} hasFeedback>
      {inputPassword ? (
        <Input.Password {...input} {...rest} />
      ) : (
        <Input {...input} {...restProps} />
      )}
      <FormError errors={errors} field={field} />
    </Form.Item>
  )
}

InputController.defaultProps = {
  errors: {},
  field: '',
  control: {},
}

export default InputController
