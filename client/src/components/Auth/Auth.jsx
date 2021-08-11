import React, {useMemo} from 'react';
import {useForm} from 'react-hook-form';
import {NavLink} from "react-router-dom";
import classnames from 'classnames'
import {Form, Input, Button, Checkbox, Row, Col, Divider} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputController from "./Common/InputController/InputController";
import CheckboxController from "./Common/CheckboxController/CheckboxController";
import ButtonController from "./Common/ButtonController/ButtonController";
import authStyles from './Auth.module.scss';

const Auth = ({login}) => {
  const schema = useMemo(() =>
    yup.object().shape({
      email: yup.string().required('Введите ваш Email').email('Некорректный Email'),
      password: yup.string().required('Введите пароль'),
    }), []);

  const {handleSubmit, formState: {errors}, control} = useForm({resolver: yupResolver(schema)});

  const onSubmit = ({email, password, rememberMe}) => {
    // console.log('form: ',email, password, rememberMe);
    login(email, password);
  }

  return (
    <div className={authStyles.form}>
      <Row>
        <Col xs={{span: 14, offset: 5}} sm={{span: 12, offset: 6}} md={{span: 9, offset: 8}} lg={{span: 8, offset: 8}} xl={{span: 6, offset: 9}} xxl={{span: 6, offset: 9}}>
          <h2>Вход в личный кабинет</h2>
          <Divider orientation="left"></Divider>
          <form onSubmit={handleSubmit(onSubmit)} className="login-form">
            <InputController errors={errors}
                             field='email'
                             control={control}
                             placeholder='Email'
                             prefix={<UserOutlined className="site-form-item-icon" />}
            />

            <InputController errors={errors}
                             field='password'
                             control={control}
                             placeholder='Пароль'
                             className="site-form-item-icon"
                             prefix={<LockOutlined className="site-form-item-icon" />}
            />

            <CheckboxController errors={errors}
                                field='rememberMe'
                                control={control}
            >
              Запомнить меня
            </CheckboxController>
            <a className={authStyles.forgot} href="https://www.google.com">
              Забыли пароль?
            </a>

            <Form.Item>
              <ButtonController field='submitBtn'
                                control={control}
                                htmlType='submit'
                                type='primary'
                                className={classnames('login-form-button', authStyles.btn)}
              >
                Войти
              </ButtonController>
              Или <NavLink to='/registration'>зарегистрироваться</NavLink>
            </Form.Item>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default Auth;