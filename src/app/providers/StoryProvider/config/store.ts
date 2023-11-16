import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoryProvider/config/StateSchema'
import { counterReducer } from 'enteties/Counter'
import { userReducer } from 'enteties/User'
import { createReducerManager } from 'app/providers/StoryProvider/config/reducerManager'

export function createReduxStore (
  initialState?: StateSchema,
  asyncReducer?: ReducersMapObject<StateSchema>
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducer,
    counter: counterReducer,
    user: userReducer
  }

  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState
  })

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  store.reducerManager = reducerManager

  return store
}
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
