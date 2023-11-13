import { type CounterSchema } from 'enteties/Counter'
import { type UserSchema } from 'enteties/User'
import { type LoginSchema } from 'features/AuthByUsername'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  loginForm: LoginSchema
}
