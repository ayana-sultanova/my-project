import { type CounterSchema } from 'enteties/Counter'
import { type UserSchema } from 'enteties/User'
import { type LoginSchema } from 'features/AuthByUsername'
import { type CombinedState, type EnhancedStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'
import { type AnyAction } from 'redux'
import { type ProfileSchema } from 'enteties/Profile'
import { type AxiosInstance } from 'axios'
import { type To } from 'history'
import { type NavigateOptions } from 'react-router'
import { type ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage'
import { type AddCommentFormSchema } from 'features/addCommentForm'
import { type ArticlesPageSchema } from 'pages/ArticlesPage'
import { type UISchema } from 'features/scrollSave'
import { type ArticleDetailsSchema } from 'enteties/Article'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  ui: UISchema

  // Асинхронные редюсеры
  articleDetails?: ArticleDetailsSchema
  loginForm?: LoginSchema
  profile?: ProfileSchema
  addCommentForm?: AddCommentFormSchema
  articlesPage?: ArticlesPageSchema
  articleDetailsPage?: ArticleDetailsPageSchema
}

export type StateSchemaKey = keyof StateSchema
export type MountedReducer = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
  // true- вмонтирован false- демонтирован
  getMountedReducers: () => MountedReducer
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance
  navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
  rejectedValue: T
  extra: ThunkExtraArg
  state: StateSchema
}
