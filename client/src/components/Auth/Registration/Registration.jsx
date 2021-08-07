import React from 'react';
import {useForm} from 'react-hook-form';
import registrationStyles from './Registration.module.scss';

const Registration = () => {
  const { register, handleSubmit, formState: { errors }} = useForm();

  const onSubmit = data => {
    console.log(data);
  }

  return (
    <div className='registrationStyles'>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text'
               placeholder='firstName'
               {...register('firstName', { required: true })}
        />
        {errors.firstName && <span>This field is required</span>}
        <input type='text'
               placeholder='secondName'
               {...register('secondName', { required: true })}
        />
        {errors.secondName && <span>This field is required</span>}
        <input type='text'
               placeholder='email'
               {...register('email', { required: true })}
        />
        {errors.email && <span>This field is required</span>}
        <input type='text'
               placeholder='password'
               {...register('password', { required: true })}
        />
        {errors.password && <span>This field is required</span>}
        <button>Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default Registration;