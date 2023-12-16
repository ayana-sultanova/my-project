import { loginByUsername } from './loginByUsername'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk'

describe('loginByUserName', () => {
  // let dispatch: Dispatch
  // let getState: () => StateSchema
  //
  // beforeEach(() => {
  //   dispatch = jest.fn()
  //   getState = jest.fn()
  // })
  // test('success login', async () => {
  //   const userValue = { username: 'admin', id: '1' }
  //   thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }))
  //   const action = loginByUsername({ username: '123', password: '123' })
  //   const result = await action(dispatch, getState, undefined)
  //   expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
  //   expect(dispatch).toHaveBeenCalledTimes(3)
  //   expect(thunk.api.post).toHaveBeenCalled()
  //   expect(result.meta.requestStatus).toBe('fulfilled')
  //   expect(result.payload).toEqual(userValue)
  // })
  // test('error login', async () => {
  //   thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
  //   const action = loginByUsername({ username: '123', password: '123' })
  //   const result = await action(dispatch, getState, undefined)
  //   expect(dispatch).toHaveBeenCalledTimes(2)
  //   expect(thunk.api.post).toHaveBeenCalled()
  //   expect(result.meta.requestStatus).toBe('rejected')
  //   expect(result.payload).toBe('error')
  // })
  test('success login', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const thunk = new TestAsyncThunk(loginByUsername)
    const userValue = { username: 'admin', id: '1' }
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }))

    const result = await thunk.callThunk({ username: '123', password: '123' })
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(thunk.api.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(userValue)
  })
  test('error login', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const thunk = new TestAsyncThunk(loginByUsername)
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk({ username: '123', password: '123' })
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(thunk.api.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('Вы ввели неправильный логин или пароль')
  })
})
