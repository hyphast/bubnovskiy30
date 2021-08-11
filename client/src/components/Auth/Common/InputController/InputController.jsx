import React from 'react';
import {Form, Input} from "antd";
import FormError from "../Error/FormError";
import PropTypes from "prop-types";
import {useController} from "react-hook-form";

const InputController = ({errors, field, control, ...restProps}) => {
  const {field: input} = useController({name: field, control});
  const {inputpassword, ...rest} = restProps;
  return (
    <Form.Item validateStatus={errors[field] ? "error" : null} hasFeedback>
      {inputpassword
        ?
        <Input.Password {...input} {...rest}/>
        :
        <Input {...input} {...restProps}/>
      }
      <FormError errors={errors} field={field} />
    </Form.Item>
  );
};

InputController.propTypes = {
  errors: PropTypes.object,
  field: PropTypes.string,
  control:  PropTypes.object,
}

InputController.defaultProps = {
  errors: {},
  field: '',
  control: {},
}

export default InputController;