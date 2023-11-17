import { StoreProvider } from './ui/StoreProvider'
import { createReduxStore, type AppDispatch } from './config/store'
import type { StateSchema, ReduxStoreWithManager, ThunkConfig } from './config/StateSchema'

export {
  StoreProvider,
  type StateSchema,
  createReduxStore,
  type ReduxStoreWithManager,
  type AppDispatch,
  type ThunkConfig
}
