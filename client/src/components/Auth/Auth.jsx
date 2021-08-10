import React from 'react';
import {useForm, useController} from 'react-hook-form';
import {NavLink} from "react-router-dom";
import classnames from 'classnames'
import {Form, Input, Button, Checkbox, Row, Col, Divider} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import authStyles from './Auth.module.scss';
import FormError from "./Common/FormError";

// const RHFController = (control, name, Component, rest) => {
//   const {
//     field: {ref, ...inputProps},
//   } = useController({
//     name,
//     control,
//     rules: {required: true},
//   });
//   const {text, ...restProps} = rest;
//   return <Component {...restProps} inputRef={ref}>{text}</Component>
// }

const schema = yup.object().shape({
  email: yup.string().required('Введите ваш Email').email('Некорректный Email'),
  password: yup.string().required('Введите пароль'),
});

const Auth = ({login}) => {
  const {handleSubmit, formState: {errors}, control} = useForm({resolver: yupResolver(schema)});
  const { field: inputEmail } = useController({ name: 'email', control});
  const { field: inputPassword } = useController({ name: 'password', control});
  const { field: {value, ...checkbox} } = useController({ name: 'rememberMe', control});
  const { field: btn } = useController({ name: 'submitBtn', control});

  const onSubmit = ({email, password, rememberMe}) => {
    console.log('a: ',email, password, rememberMe);
    login(email, password);
  }

  return (
    <div className={authStyles.form}>
      <Row>
        <Col xs={{span: 14, offset: 5}} sm={{span: 12, offset: 6}} md={{span: 9, offset: 8}} lg={{span: 8, offset: 8}} xl={{span: 6, offset: 9}} xxl={{span: 6, offset: 9}}>
          <h2>Вход в личный кабинет</h2>
          <Divider orientation="left"></Divider>
          <form onSubmit={handleSubmit(onSubmit)} className="login-form">
            <Form.Item validateStatus={errors.email ? "error" : null} hasFeedback>
              <Input {...inputEmail}
                     placeholder='Email'
                     prefix={<UserOutlined className="site-form-item-icon" />}
              />
              <FormError errors={errors} field='email' />
            </Form.Item>

            <Form.Item validateStatus={errors.password ? "error" : null} hasFeedback>
              <Input.Password {...inputPassword}
                     placeholder='Пароль'
                     prefix={<LockOutlined
                     className="site-form-item-icon"/>}
              />
              <FormError errors={errors} field='password' />
            </Form.Item>
            <Form.Item valuePropName="checked" noStyle>
              <Checkbox {...checkbox}>Запомнить меня</Checkbox>
              <a className={authStyles.forgot} href="https://www.google.com">
                Забыли пароль?
              </a>
            </Form.Item>
            <Form.Item>
              <Button {...btn}
                      type='primary'
                      htmlType='submit'
                      className={classnames('login-form-button', authStyles.btn)}
              >
                Войти
              </Button>
              Или <NavLink to='/registration'>зарегистрироваться</NavLink>
            </Form.Item>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default Auth;