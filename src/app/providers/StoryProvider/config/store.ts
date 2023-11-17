import { type CombinedState, configureStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoryProvider/config/StateSchema'
import { counterReducer } from 'enteties/Counter'
import { userReducer } from 'enteties/User'
import { createReducerManager } from 'app/providers/StoryProvider/config/reducerManager'
import { $api } from 'shared/lib/api/api'
import { type NavigateOptions } from 'react-router'
import { type To } from 'history'

export function createReduxStore (
  initialState?: StateSchema,
  asyncReducer?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducer,
    counter: counterReducer,
    user: userReducer
  }

  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api,
          navigate
        }
      }
    })
  })

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  store.reducerManager = reducerManager

  return store
}
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
