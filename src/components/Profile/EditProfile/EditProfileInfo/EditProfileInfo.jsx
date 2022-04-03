import React, {useMemo} from 'react';
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import InputController from "../../../Auth/Common/InputController/InputController";
import SelectController from "../../../Auth/Common/SelectController/SelectController";
import RegistrationStyles from "../../../Auth/Registration/Registration.module.scss";
import ButtonController from "../../../Auth/Common/ButtonController/ButtonController";

const EditProfileInfo = ({firstName, lastName, patronymic, gender, phoneNumber, editProfileInfo}) => {
  const schema = useMemo(() =>
    yup.object().shape({
      firstName: yup.string(),
      lastName: yup.string(),
      patronymic: yup.string(),
      gender: yup.string(),
      phoneNumber: yup.string().min(10).max(10),
    }), []);

  const {handleSubmit, setError, formState: {errors}, control, clearErrors} = useForm({resolver: yupResolver(schema), defaultValues: {
      firstName: firstName,
      lastName: lastName,
      patronymic: patronymic,
      gender: gender,
      phoneNumber: phoneNumber,
    }});

  const onSubmit = ({firstName, lastName, patronymic, gender, phoneNumber}) => {
    editProfileInfo(firstName, lastName, patronymic, gender, phoneNumber);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="edit-profile-form">
      <InputController errors={errors}
                       field='firstName'
                       control={control}
                       placeholder='Имя'
      />

      <InputController errors={errors}
                       field='lastName'
                       control={control}
                       placeholder='Фамилия'
      />

      <InputController errors={errors}
                       field='patronymic'
                       control={control}
                       placeholder='Отчество'
      />

      <SelectController errors={errors}
                        field='gender'
                        options={{male: 'Мужчина', female: 'Женщина'}}
                        control={control}
                        placeholder='Пол'
      />

      <InputController className={RegistrationStyles.phoneNumber}
                       errors={errors}
                       field='phoneNumber'
                       control={control}
                       placeholder='Номер телефона'
                       addonBefore='+7'
      />
      <ButtonController field='submitBtn'
                        control={control}
        //disabled={isLoading} TODO refactor
                        className={RegistrationStyles.btn}
                        htmlType='submit'
                        type='primary'
      >
        Сохранить
      </ButtonController>
    </form>
  );
};

export default EditProfileInfo;