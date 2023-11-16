import { type DeepPartial } from '@reduxjs/toolkit'
import { type LoginSchema } from 'features/AuthByUsername'
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'

describe('loginSlice', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = { username: '123' }
    expect(loginReducer(
      state as LoginSchema,
      loginActions.setUserName('123')
    )).toEqual({ username: '123' })
  })

  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '123' }
    expect(loginReducer(
      state as LoginSchema,
      loginActions.setPassword('123')
    )).toEqual({ password: '123' })
  })
})
