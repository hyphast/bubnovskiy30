import React, {FC} from 'react';
import {Form, Select} from "antd";
import FormError from "../Error/FormError";
import {useController} from "react-hook-form";

const { Option } = Select;

type PropsType = {
    errors: any,
    field: string,
    options: any,
    control: any,
}

const SelectController: FC<PropsType> = ({errors, field, options, control, ...restProps}) => {
  const {field: select} = useController({name: field, control});
  return (
    <Form.Item validateStatus={errors[field] ? "error" : ""} hasFeedback>
      <Select {...select} {...restProps}>
        {Object.keys(options).map(opt =>
          <Option key={opt} value={opt}>{options[opt]}</Option>
          )}
      </Select>
      <FormError errors={errors} field={field} />
    </Form.Item>
  );
};

SelectController.defaultProps = {
  errors: {},
  field: '',
  options: {},
  control: {},
}

export default SelectController;