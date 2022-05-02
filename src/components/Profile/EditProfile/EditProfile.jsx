import React from 'react'
import AvatarUpload from '../AvatarUpload/AvatarUpload'
import { Divider } from 'antd'
import EditProfileStyles from './EditProfile.module.scss'
import EditProfileInfo from './EditProfileInfo/EditProfileInfo'
import EditPassword from './EditPassword/EditPassword'

const EditProfile = ({ photoUrl, savePhoto, ...props }) => {
  return (
    <div>
      <h2>Редактировать профиль</h2>
      <div className={EditProfileStyles.editInfo}>
        <div>
          <h3>Изменить фото</h3>
          <AvatarUpload photoUrl={photoUrl} savePhoto={savePhoto} />
        </div>
        <div className={EditProfileStyles.editMainInfo}>
          <h3>Редактировать основную информацию</h3>
          <Divider orientation="left"></Divider>
          <EditProfileInfo {...props} />
        </div>
        <div className={EditProfileStyles.editMainInfo}>
          <h3>Изменить пароль</h3>
          <Divider orientation="left"></Divider>
          <EditPassword />
        </div>
      </div>
    </div>
  )
}

export default EditProfile
