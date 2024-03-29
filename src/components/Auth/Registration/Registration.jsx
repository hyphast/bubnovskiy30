import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Col, Divider, Form, Row } from 'antd'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import InputController from '../Common/InputController/InputController'
import SelectController from '../Common/SelectController/SelectController'
import CheckboxController from '../Common/CheckboxController/CheckboxController'
import ButtonController from '../Common/ButtonController/ButtonController'
import RegistrationStyles from './Registration.module.scss'
import authStyles from '../Login/Login.module.scss'
import ReCAPTCHA from 'react-google-recaptcha'
import { Link } from 'react-router-dom'

const Registration = ({ registration, _error, _clearError, isLoading }) => {
  const [captchaToken, setCaptchaToken] = useState('')

  const schema = useMemo(
    () =>
      yup.object().shape({
        firstName: yup.string().required('Введите ваше имя'),
        lastName: yup.string().required('Введите вашу фамилию'),
        patronymic: yup.string().required('Введите ваше отчество'),
        gender: yup.string().required('Выберите ваш пол'),
        email: yup
          .string()
          .required('Введите ваш Email')
          .email('Некорректный Email'),
        password: yup
          .string()
          .required('Это поле обязательное')
          .min(6, 'Пароль должен быть больше 6 символов')
          .max(32, 'Максимальная длина пароля 32 символа'),
        confirmPassword: yup
          .string()
          .required('Это поле обязательное')
          .oneOf([yup.ref('password'), null], 'Пароли должны совпадать'),
        phoneNumber: yup
          .string()
          .min(10)
          .max(10, 'Неверный формат номера телефона'),
        agreement: yup
          .boolean()
          .required('Условия соглашения необходимо принять')
          .oneOf([true], 'Условия соглашения необходимо принять'),
      }),
    [],
  )

  const {
    handleSubmit,
    setError,
    formState: { errors },
    control,
    clearErrors,
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = ({
    firstName,
    lastName,
    patronymic,
    email,
    password,
    gender,
    phoneNumber,
  }) => {
    //console.log('form:', firstName, lastName, gender, email, password, confirmPassword, phoneNumber, agreement);
    registration(
      firstName,
      lastName,
      patronymic,
      email,
      password,
      gender,
      phoneNumber,
      captchaToken,
    )
  }

  useEffect(() => {
    _error.length &&
      _error.forEach((er) => {
        Object.keys(er).map((key) =>
          setError(key, { type: 'Server', message: er[key] }),
        )
      })
  }, [_error, setError])

  useEffect(() => {
    clearErrors()
    return () => {
      _clearError()
    }
  }, [_clearError, clearErrors])

  const onRecaptchaChange = (value) => {
    console.log('Captcha value:', typeof value)
    setCaptchaToken(value)
  }

  return (
    <div className={RegistrationStyles.form}>
      <Row>
        <Col
          xs={{ span: 14, offset: 5 }}
          sm={{ span: 12, offset: 6 }}
          md={{ span: 9, offset: 7 }}
          lg={{ span: 8, offset: 8 }}
          xl={{ span: 6, offset: 9 }}
          xxl={{ span: 6, offset: 9 }}
        >
          <h2>Регистрация</h2>
          <Divider orientation="left"></Divider>
          <form onSubmit={handleSubmit(onSubmit)} className="login-form">
            <InputController
              errors={errors}
              field="lastName"
              control={control}
              placeholder="Фамилия"
            />

            <InputController
              errors={errors}
              field="firstName"
              control={control}
              placeholder="Имя"
            />

            <InputController
              errors={errors}
              field="patronymic"
              control={control}
              placeholder="Отчество"
            />

            <SelectController
              errors={errors}
              field="gender"
              options={{ male: 'Мужчина', female: 'Женщина' }}
              control={control}
              placeholder="Пол"
            />

            <InputController
              errors={errors}
              field="email"
              control={control}
              placeholder="Email"
            />

            <InputController
              errors={errors}
              field="password"
              control={control}
              placeholder="Пароль"
              inputPassword
            />

            <InputController
              errors={errors}
              field="confirmPassword"
              control={control}
              placeholder="Подтвердите пароль"
              inputPassword
            />

            <InputController
              className={RegistrationStyles.phoneNumber}
              errors={errors}
              field="phoneNumber"
              control={control}
              placeholder="Номер телефона"
              addonBefore="+7"
            />

            <Form.Item
              label="Проверка на робота"
              tooltip="Подтвердите, что вы не робот"
              extra="Подтвердите, что вы не робот"
            >
              <div className={RegistrationStyles.recaptcha}>
                <ReCAPTCHA //TODO сделать отдельный компонент
                  sitekey={String(process.env.REACT_APP_RECAPTCHA_KEY)} //TODO test key here
                  onChange={onRecaptchaChange}
                  hl="ru"
                />
              </div>
            </Form.Item>

            <Form.Item>
              <CheckboxController
                errors={errors}
                field="agreement"
                control={control}
              >
                Я прочитал и принимаю <a href="">Условия соглашения</a>
              </CheckboxController>
              <div style={{ display: 'flex' }}>
                <ButtonController
                  field="submitBtn"
                  control={control}
                  disabled={isLoading || !captchaToken}
                  className={RegistrationStyles.btn}
                  htmlType="submit"
                  type="primary"
                >
                  Зарегистрироваться
                </ButtonController>
                <Link to="/login" style={{ margin: '1.7rem 0 0 1rem' }}>
                  Я уже зарегистрирован
                </Link>
              </div>
            </Form.Item>
          </form>
        </Col>
      </Row>
    </div>
  )
}

export default Registration
