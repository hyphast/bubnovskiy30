import React from 'react';
import {Form, Select} from "antd";
import FormError from "../Error/FormError";
import {useController} from "react-hook-form";
import PropTypes from "prop-types";

const { Option } = Select;

const SelectController = ({errors, field, options, control, ...restProps}) => {
  const {field: select} = useController({name: field, control});
  return (
    <Form.Item validateStatus={errors[field] ? "error" : null} hasFeedback>
      <Select {...select} {...restProps}>
        {Object.keys(options).map(opt =>
          <Option key={opt} value={opt}>{options[opt]}</Option>
          )}
      </Select>
      <FormError errors={errors} field={field} />
    </Form.Item>
  );
};

SelectController.propTypes = {
  errors: PropTypes.object,
  field: PropTypes.string,
  options: PropTypes.object,
  control:  PropTypes.object,
}

SelectController.defaultProps = {
  errors: {},
  field: '',
  options: {},
  control: {},
}

export default SelectController;