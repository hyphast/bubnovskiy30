import React, { FC, useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import { Row, Col, Divider, Alert, Avatar, Form } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import InputController from '../Common/InputController/InputController'
import CheckboxController from '../Common/CheckboxController/CheckboxController'
import ButtonController from '../Common/ButtonController/ButtonController'
import authStyles from './Login.module.scss'
import ReCAPTCHA from 'react-google-recaptcha'
import LogoImg from '../../../assets/images/logo.jpg'
import RegistrationStyles from '../Registration/Registration.module.scss'

//TODO ?? дублирование
type MapStateToPropsType = {
  _error: Array<any>
  isLoading: boolean
}
//TODO ??
type MapDispatchToPropsType = {
  login: (email: string, password: string, captchaToken: string) => void
  _clearError: () => void
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

const Login: FC<PropsType> = ({ login, _error, _clearError, isLoading }) => {
  const [captchaToken, setCaptchaToken] = useState('')

  const schema = useMemo(
    () =>
      yup.object().shape({
        email: yup
          .string()
          .required('Введите ваш Email')
          .email('Некорректный Email'),
        password: yup
          .string()
          .required('Введите пароль')
          .min(6, 'Пароль должен быть больше 6 символов')
          .max(32, 'Максимальная длина пароля 32 символа'),
      }),
    [],
  )

  const {
    handleSubmit,
    setError,
    formState: { errors },
    control,
    clearErrors,
  } = useForm<FormValues>({ resolver: yupResolver(schema) })

  const onSubmit: (obj: FormValues) => void = ({
    email,
    password,
    rememberMe,
  }) => {
    // console.log('form: ',email, password, rememberMe);
    //login(email, password).catch((response: any) => console.log(response));
    login(email, password, captchaToken)
  }

  useEffect(() => {
    _error.length &&
      _error.forEach((er) => {
        Object.keys(er).map((key: any) => setError(key, { type: 'Server' })) //TODO refactor any
      })
  }, [_error, setError])

  useEffect(() => {
    clearErrors()
    return () => {
      _clearError()
    }
  }, [_clearError, clearErrors])

  const onRecaptchaChange = (value: any) => {
    console.log('Captcha value:', typeof value)
    setCaptchaToken(value)
  }

  return (
    <div className={authStyles.form}>
      <Row>
        <Col
          xs={{ span: 14, offset: 5 }}
          sm={{ span: 12, offset: 6 }}
          md={{ span: 9, offset: 8 }}
          lg={{ span: 8, offset: 8 }}
          xl={{ span: 6, offset: 9 }}
          xxl={{ span: 6, offset: 9 }}
        >
          {/*<Avatar size={100} src={LogoImg} style={{position: 'relative', left: '8rem'}} />*/}
          <h2>Вход в личный кабинет</h2>
          <Divider orientation="left"></Divider>
          <form onSubmit={handleSubmit(onSubmit)} className="login-form">
            <InputController
              errors={errors}
              field="email"
              control={control}
              placeholder="Email"
              prefix={<UserOutlined className="site-form-item-icon" />}
            />
            <InputController
              errors={errors}
              field="password"
              type="password"
              control={control}
              placeholder="Пароль"
              className="site-form-item-icon"
              prefix={<LockOutlined className="site-form-item-icon" />}
            />
            {_error[0] && (
              <Alert
                className={authStyles.alertError}
                message={<>{Object.values(_error[0])[0]}</>} //TODO было без фрагмента
                type="error"
                showIcon
              />
            )}
            <Form.Item extra="Подтвердите, что вы не робот">
              <div className={authStyles.recaptcha}>
                <ReCAPTCHA //TODO сделать отдельный компонент
                  sitekey={String(process.env.REACT_APP_RECAPTCHA_KEY)} //TODO test key here
                  onChange={onRecaptchaChange}
                  hl="ru"
                />
              </div>
            </Form.Item>
            <CheckboxController
              errors={errors}
              field="rememberMe"
              control={control}
            >
              Запомнить меня
            </CheckboxController>
            <a className={authStyles.forgot} href="https://www.google.com">
              Забыли пароль?
            </a>
            <ButtonController
              field="submitBtn"
              control={control}
              disabled={isLoading || !captchaToken} //TODO was: isLoading || !isVerified
              htmlType="submit"
              type="primary"
              className={classnames('login-form-button', authStyles.btn)}
            >
              Войти
            </ButtonController>
            {/*<button>log in</button>*/}
            Или <Link to="/registration">зарегистрироваться</Link>
          </form>
        </Col>
      </Row>
    </div>
  )
}

export default Login
