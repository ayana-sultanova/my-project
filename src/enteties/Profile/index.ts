import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData'
import { updateProfileData } from './model/services/updateProfileData/updateProfileData'
import { profileActions, profileReducer } from './model/slice/profileSlice'
import { type ProfileSchema, type Profile } from './model/types/ProfileSchema'
import { ProfileCard } from './ui/ProfileCard/ProfileCard'
import { getProfileError } from './model/selectors/getProfileError/getProfileError'
import { getProfileIsloading } from './model/selectors/getProfileIsloading/getProfileIsloading'
import { getProfileData } from './model/selectors/getProfileData/getProfileData'
import { getProfileReadonly } from './model/selectors/getProfileReadonly/getProfileReadonly'

export {
  type Profile,
  type ProfileSchema,
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
  getProfileReadonly
}
