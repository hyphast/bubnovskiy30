import React from 'react';
import {useForm} from 'react-hook-form';
import {NavLink, Redirect} from "react-router-dom";
import authStyles from './Auth.module.scss';

const Auth = ({login}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = ({email, password}) => {
    login(email, password);
  }

  return (
    <div className={authStyles.form}>
      <h2>Auth page</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='email'
               type='text'
               {...register('email', { required: true })}
        />
        {errors.email && <span>This field is required</span>}
        <input placeholder='password'
               type='text'
               {...register('password', { required: true })}
        />
        {errors.password && <span>This field is required</span>}
        <button>Войти</button>
      </form>
      <NavLink to='/registration'>Зарегистрироваться</NavLink>
    </div>
  );
};

export default Auth;