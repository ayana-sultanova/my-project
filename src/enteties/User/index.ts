import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData'
import { userReducer, userActions } from './model/slice/userSlice'
import { type UserSchema, type User } from './model/types/userSchema'

export {
  userReducer,
  userActions,
  type UserSchema,
  type User,
  getUserAuthData
}
