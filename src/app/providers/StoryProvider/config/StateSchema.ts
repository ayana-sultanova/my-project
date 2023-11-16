import { type CounterSchema } from 'enteties/Counter'
import { type UserSchema } from 'enteties/User'
import { type LoginSchema } from 'features/AuthByUsername'
import { type CombinedState, type EnhancedStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'
import { type AnyAction } from 'redux'
import { type ProfileSchema } from 'enteties/Profile'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema

  // Асинхронные редюсеры
  loginForm?: LoginSchema
  profile?: ProfileSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}
