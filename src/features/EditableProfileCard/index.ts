import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData'
import { profileActions, profileReducer } from './model/slice/profileSlice'
import { type ProfileSchema, type Profile } from './model/types/ProfileSchema'
import { ProfileCard } from './ui/ProfileCard/ProfileCard'

export {
  type Profile,
  type ProfileSchema,
  profileReducer,
  profileActions,
  fetchProfileData,
  ProfileCard
}
