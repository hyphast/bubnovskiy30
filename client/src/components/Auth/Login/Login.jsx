import React, {useEffect, useMemo} from 'react';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';
import classnames from 'classnames'
import {Row, Col, Divider, Alert} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputController from "../Common/InputController/InputController";
import CheckboxController from "../Common/CheckboxController/CheckboxController";
import ButtonController from "../Common/ButtonController/ButtonController";
import authStyles from './Login.module.scss';

const Login = ({login, _error, _clearError, isLoading}) => {
  const schema = useMemo(() =>
    yup.object().shape({
      email: yup.string().required('Введите ваш Email').email('Некорректный Email'),
      password: yup.string().required('Введите пароль'),
    }), []);

  const {handleSubmit, setError, formState: {errors}, control, clearErrors} = useForm({resolver: yupResolver(schema)});

  const onSubmit = ({email, password, rememberMe}) => {
    // console.log('form: ',email, password, rememberMe);
    login(email, password).catch(response => console.log(response));
  }

  useEffect(() => {
    _error.length && _error.forEach((er) => {
      Object.keys(er).map((key) => setError(key, {type: 'Server'}))
    })
  }, [_error, setError])

  useEffect(() => {
    clearErrors();
    return () => {
      _clearError();
    }
  }, [_clearError, clearErrors]);


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

            {_error[0] && <Alert className={authStyles.alertError} message={Object.values(_error[0])[0]} type="error" showIcon />}

            <CheckboxController errors={errors}
                                field='rememberMe'
                                control={control}
            >
              Запомнить меня
            </CheckboxController>
            <a className={authStyles.forgot} href="https://www.google.com">
              Забыли пароль?
            </a>

            <ButtonController field='submitBtn'
                              control={control}
                              disabled={isLoading}
                              htmlType='submit'
                              type='primary'
                              className={classnames('login-form-button', authStyles.btn)}
            >
              Войти
            </ButtonController>
            {/*<button>log in</button>*/}
            Или <Link to='/registration'>зарегистрироваться</Link>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;