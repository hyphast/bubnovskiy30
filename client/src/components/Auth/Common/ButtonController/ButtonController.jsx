import React from 'react';
import {Button} from "antd";
import {useController} from "react-hook-form";
import PropTypes from "prop-types";
import {Form} from 'antd';
import CheckboxController from "../CheckboxController/CheckboxController";

const ButtonController = ({field, control, children, ...restProps}) => {
  const {field: btn} = useController({name: field, control});
  return (
    <Form.Item>
      <Button {...btn}
              type='primary'
              htmlType='submit'
              {...restProps}
        //className={classnames('login-form-button', authStyles.btn)}
      >
        {children}
      </Button>
    </Form.Item>
  );
};

CheckboxController.propTypes = {
  field: PropTypes.string,
  control:  PropTypes.object,
  children: PropTypes.node,
}

CheckboxController.defaultProps = {
  field: '',
  control: {},
  children: 'Submit',
}

export default ButtonController;