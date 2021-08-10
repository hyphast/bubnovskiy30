import React from 'react';
import {useController, useForm} from 'react-hook-form';
import {Button, Checkbox, Col, Divider, Form, Input, Row, Select} from "antd";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import FormError from "../Common/FormError";
import RegistrationStyles from './Registration.module.scss';

const { Option } = Select;

const schema = yup.object().shape({
  firstName: yup.string().required('Как вас зовут?'),
  lastName: yup.string().required('Как вас зовут?'),
  gender: yup.string().required('Выберите ваш пол'),
  email: yup.string().required('Введите ваш Email').email('Некорректный Email'),
  password: yup.string().required('Это поле обязательное').min(6, 'Пароль должен быть больше 6 символов').max(32, 'Максимальная длина пароля 32 символа'),
  confirmPassword: yup.string().required('Это поле обязательное').oneOf([yup.ref('password'), null], 'Пароли должны совпадать'),
  phoneNumber: yup.number().min(10),
  agreement: yup.boolean().required('Условия соглашения необходимо принять').oneOf([true], 'Условия соглашения необходимо принять'),
});

const Registration = ({registration}) => {
  const {handleSubmit, formState: {errors}, control} = useForm({resolver: yupResolver(schema)});
  const { field: inputFirstName } = useController({ name: 'firstName', control});
  const { field: inputLastName } = useController({ name: 'lastName', control});
  const { field: selectGender} = useController({ name: 'gender', control});
  const { field: inputEmail } = useController({ name: 'email', control});
  const { field: inputPassword } = useController({ name: 'password', control});
  const { field: inputConfirmPassword } = useController({ name: 'confirmPassword', control});
  const { field: inputPhoneNumber } = useController({ name: 'phoneNumber', control});
  const { field: {value: valueAgreement, ...checkbox} } = useController({ name: 'agreement', control});
  const { field: btn } = useController({ name: 'submitBtn', control});

   const onSubmit = ({firstName, lastName, email, password}) => {
    console.log('form:', firstName, lastName, email, password);
    registration(firstName, lastName, email, password);
  }

  return (
    <div className={RegistrationStyles.form}>
      <Row>
        <Col xs={{span: 14, offset: 5}} sm={{span: 12, offset: 6}} md={{span: 9, offset: 7}} lg={{span: 8, offset: 8}} xl={{span: 6, offset: 9}} xxl={{span: 6, offset: 9}}>
          <h2>Регистрация</h2>
          <Divider orientation="left"></Divider>
          <form onSubmit={handleSubmit(onSubmit)} className="login-form">
            <Form.Item validateStatus={errors.firstName ? "error" : null} hasFeedback>
              <Input  {...inputFirstName} placeholder='Имя'/>
              <FormError errors={errors} field='firstName' />
            </Form.Item>

            <Form.Item validateStatus={errors.lastName ? "error" : null} hasFeedback>
              <Input {...inputLastName} placeholder='Фамилия'/>
              <FormError errors={errors} field='lastName' />
            </Form.Item>

            <Form.Item validateStatus={errors.gender ? "error" : null} hasFeedback>
              <Select placeholder='Пол' {...selectGender}>
                <Option value="male">Мужчина</Option>
                <Option value="female">Женщина</Option>
              </Select>
              <FormError errors={errors} field='gender' />
            </Form.Item>

            <Form.Item validateStatus={errors.email ? "error" : null} hasFeedback>
              <Input {...inputEmail} placeholder='Email'/>
              <FormError errors={errors} field='email' />
             </Form.Item>

             <Form.Item validateStatus={errors.password ? "error" : null} hasFeedback>
               <Input.Password {...inputPassword} placeholder='Пароль'/>
               <FormError errors={errors} field='password' />
             </Form.Item>

             <Form.Item validateStatus={errors.confirmPassword ? "error" : null} hasFeedback>
                <Input.Password {...inputConfirmPassword} placeholder='Подтвердите пароль'/>
                <FormError errors={errors} field='confirmPassword' />
             </Form.Item>

             <Form.Item>
               <Input addonBefore='+7'
                      placeholder='Номер телефона'
                      style={{width: '100%'}}
                      {...inputPhoneNumber}
               />
             </Form.Item>

             <Form.Item label="Captcha" tooltip="Подтвердите, что вы не робот"  extra="Подтвердите, что вы не робот">

             {errors.captcha && <span>This field is required</span>}
             </Form.Item>

             <Form.Item>
              <Form.Item>
                 <Checkbox {...checkbox}>
                   Я прочитал и принимаю <a href="">Условия соглашения</a>
                 </Checkbox>
                 <FormError errors={errors} field='agreement' />
              </Form.Item>
                <Button {...btn}
                        type='primary'
                        htmlType='submit'
                        //className={classnames('login-form-button', authStyles.btn)}
                >
                  Зарегистрироваться
                </Button>
              </Form.Item>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default Registration;