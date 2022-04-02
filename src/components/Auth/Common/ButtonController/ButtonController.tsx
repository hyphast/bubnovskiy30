import React, {FC} from 'react';
import {Button} from "antd";
import {useController} from "react-hook-form";
import {Form} from 'antd';

type PropsType = {
    field: string,
    control: any,
    disabled: boolean,
    children: React.ReactNode,
    htmlType: 'button' | 'submit' | 'reset' | undefined,
    type: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed' | undefined,
    className?: string
}

const ButtonController: FC<PropsType> = ({field, control, disabled, children, ...restProps}) => {
  const {field: btn} = useController({name: field, control});
  const {type, htmlType, ...rest} = restProps;
  return (
    <Form.Item>
      <Button {...btn}
              type={type}
              htmlType={htmlType}
              disabled={disabled}
              {...rest}
        //className={classnames('login-form-button', authStyles.btn)}
      >
        {children}
      </Button>
    </Form.Item>
  );
};

ButtonController.defaultProps = {
  field: '',
  control: {},
  children: 'Submit',
}

export default ButtonController;