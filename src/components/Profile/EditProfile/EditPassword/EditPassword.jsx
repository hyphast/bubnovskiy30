import React, { useMemo } from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import InputController from '../../../Auth/Common/InputController/InputController'
import RegistrationStyles from '../../../Auth/Registration/Registration.module.scss'
import ButtonController from '../../../Auth/Common/ButtonController/ButtonController'
import { LockOutlined } from '@ant-design/icons'

const EditPassword = (props) => {
  const schema = useMemo(
    () =>
      yup.object().shape({
        password: yup.string().required('Введите пароль'),
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

  const onSubmit = ({ password }) => {
    console.log(password)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="edit-profile-form">
      <InputController
        errors={errors}
        type="password"
        field="password"
        control={control}
        placeholder="Текущий пароль"
        className="site-form-item-icon"
        prefix={<LockOutlined className="site-form-item-icon" />}
      />

      <InputController
        errors={errors}
        type="password"
        field="password"
        control={control}
        placeholder="Новый пароль"
        className="site-form-item-icon"
        prefix={<LockOutlined className="site-form-item-icon" />}
      />

      <ButtonController
        field="submitBtn"
        control={control}
        //disabled={isLoading} TODO refactor
        className={RegistrationStyles.btn}
        htmlType="submit"
        type="primary"
      >
        Изменить пароль
      </ButtonController>
    </form>
  )
}

export default EditPassword
