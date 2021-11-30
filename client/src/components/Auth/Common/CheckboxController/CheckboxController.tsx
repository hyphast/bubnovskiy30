import React, {FC} from 'react';
import {Checkbox, Form} from "antd";
import FormError from "../Error/FormError";
import {useController} from "react-hook-form";

type PropsType = {
  errors: any,
  field: string,
  control: any,
  children: React.ReactNode,
}

const CheckboxController: FC<PropsType> = ({errors, field, control, children, ...restProps}) => {
  const {field: {value, ...checkbox}} = useController({name: field, control});
  return (
    <Form.Item valuePropName="checked" noStyle>
      <Checkbox {...checkbox} {...restProps}>
        {children}
      </Checkbox>
      <FormError errors={errors} field={field}/>
    </Form.Item>
  )
}

CheckboxController.defaultProps = {
  errors: {},
  field: '',
  control: {},
  children: '',
}

export default CheckboxController;