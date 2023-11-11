import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoryProvider/config/StateSchema'
import { counterReducer } from 'enteties/Counter'
import { userReducer } from 'enteties/User'

export function createReduxStore (initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer
  }
  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState
  })
}
