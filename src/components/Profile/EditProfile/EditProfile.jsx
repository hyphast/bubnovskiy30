import React from 'react'
import AvatarUpload from '../AvatarUpload/AvatarUpload'
import { Divider } from 'antd'
import EditProfileInfo from './EditProfileInfo/EditProfileInfo'
import EditPassword from './EditPassword/EditPassword'
import styles from './EditProfile.module.scss'

const EditProfile = ({ photoUrl, savePhoto, ...props }) => {
  return (
    <div>
      <h2>Редактировать профиль</h2>
      <div className={styles.root}>
        <div className={styles.editPhoto}>
          <h3>Изменить фото</h3>
          <AvatarUpload photoUrl={photoUrl} savePhoto={savePhoto} />
        </div>
        <div>
          <h3>Редактировать основную информацию</h3>
          <Divider orientation="left"></Divider>
          <EditProfileInfo {...props} />
        </div>
        <div>
          <h3>Изменить пароль</h3>
          <Divider orientation="left"></Divider>
          <EditPassword />
        </div>
      </div>
    </div>
  )
}

export default EditProfile
