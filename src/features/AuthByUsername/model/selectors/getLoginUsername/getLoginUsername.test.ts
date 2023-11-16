import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoryProvider'
import { getLoginUsername } from './getLoginUsername'

describe('getLoginUsername', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'admin'
      }
    }
    expect(getLoginUsername(state as StateSchema)).toEqual('admin')
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginUsername(state as StateSchema)).toEqual('')
  })
})
