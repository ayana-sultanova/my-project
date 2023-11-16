import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoryProvider'
import { getLoginPassword } from './getLoginPassword'

describe('getLoginPassword', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: 'qweqwe'
      }
    }
    expect(getLoginPassword(state as StateSchema)).toEqual('qweqwe')
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginPassword(state as StateSchema)).toEqual('')
  })
})
