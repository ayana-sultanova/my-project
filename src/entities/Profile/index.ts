import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData'
import { updateProfileData } from './model/services/updateProfileData/updateProfileData'
import { profileActions, profileReducer } from './model/slice/profileSlice'
import { type ProfileSchema, type Profile, ValidateProfileError } from './model/types/ProfileSchema'
import { ProfileCard } from './ui/ProfileCard/ProfileCard'
import { getProfileError } from './model/selectors/getProfileError/getProfileError'
import { getProfileIsloading } from './model/selectors/getProfileIsloading/getProfileIsloading'
import { getProfileData } from './model/selectors/getProfileData/getProfileData'
import { getProfileReadonly } from './model/selectors/getProfileReadonly/getProfileReadonly'
import { getProfileValidateErrors } from './model/selectors/getProfileValidateErrors/getProfileValidateErrors'

export {
  type Profile,
  type ProfileSchema,
  ValidateProfileError,
  profileReducer,
  profileActions,
  fetchProfileData,
  updateProfileData,
  ProfileCard
}

export {
  getProfileError,
  getProfileIsloading,
  getProfileData,
  getProfileReadonly,
  getProfileValidateErrors
}
