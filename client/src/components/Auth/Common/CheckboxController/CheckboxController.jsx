import React from 'react';
import {Checkbox, Form} from "antd";
import FormError from "../Error/FormError";
import {useController} from "react-hook-form";
import PropTypes from "prop-types";

const CheckboxController = ({errors, field, control, children, ...restProps}) => {
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

CheckboxController.propTypes = {
  errors: PropTypes.object,
  field: PropTypes.string,
  control:  PropTypes.object,
  children: PropTypes.node,
}

CheckboxController.defaultProps = {
  errors: {},
  field: '',
  control: {},
  children: '',
}

export default CheckboxController;