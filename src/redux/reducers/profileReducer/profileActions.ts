import { SET_PROFILE, SET_USER_INFO } from '../../types'
import { profileAPI } from '../../../API/api'
import { ProfileType } from '../commonTypes'
import { setMessage } from '../appReducer/appAction'

type SetUserProfileType = {
  type: typeof SET_PROFILE
  payload: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileType => {
  const photoUrl = profile.photoUrl.length
    ? process.env.REACT_APP_API_URL + '/' + profile.photoUrl
    : ''
  return { type: SET_PROFILE, payload: { ...profile, photoUrl } }
}

// type setUserPhotoType = {
//   type: typeof SET_USER_PHOTO,
//   payload: {photoUrl: string},
// }
// export const setUserPhoto = (photoUrl: string): setUserPhotoType => {
//   return {type: SET_USER_PHOTO, payload: {photoUrl}}
// }

type SetUserInfoPayloadType = {
  firstName: string
  lastName: string
  patronymic: string
  gender: string
  phoneNumber: string
}
type SetUserInfoType = {
  type: typeof SET_USER_INFO
  payload: SetUserInfoPayloadType
}
export const setUserInfo = (
  firstName: string,
  lastName: string,
  patronymic: string,
  gender: string,
  phoneNumber: string,
): SetUserInfoType => {
  return {
    type: SET_USER_INFO,
    payload: { firstName, lastName, patronymic, gender, phoneNumber },
  }
}

export const getUserProfile = () => {
  return async (dispatch: any) => {
    try {
      const data = await profileAPI.getUserProfile()

      dispatch(setUserProfile(data.profile))
    } catch (e: any) {
      console.log(e.response?.data?.message)
    }
  }
}

export const savePhoto = (photo: any) => {
  return async (dispatch: any) => {
    try {
      const data = await profileAPI.savePhoto(photo)
      // dispatch(setUserPhoto(photo));

      dispatch(getUserProfile())

      dispatch(setMessage(data))
    } catch (e: any) {
      console.log(e.response?.data?.message)
      dispatch(setMessage(e.response?.data))
    }
  }
}

export const editProfileInfo = (
  firstName: string,
  lastName: string,
  patronymic: string,
  gender: string,
  phoneNumber: string,
) => {
  return async (dispatch: any) => {
    try {
      const data = await profileAPI.editProfileInfo(
        firstName,
        lastName,
        patronymic,
        gender,
        phoneNumber,
      )
      dispatch(
        setUserInfo(firstName, lastName, patronymic, gender, phoneNumber),
      )

      dispatch(getUserProfile())

      dispatch(setMessage(data))
    } catch (e: any) {
      console.log(e.response?.data?.message)
      dispatch(setMessage(e.response?.data))
    }
  }
}
