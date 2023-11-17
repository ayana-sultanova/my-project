import { type ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from 'app/providers/StoryProvider/config/store'
import { type StateSchema } from 'app/providers/StoryProvider/config/StateSchema'
import { type ReducersMapObject } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router'

interface StoreProviderProps {
  children?: ReactNode
  initialState?: DeepPartial<StateSchema>
  asyncReducer?: DeepPartial<ReducersMapObject<StateSchema>>
}
export const StoreProvider = (props: StoreProviderProps) => {
  const {
    children,
    initialState,
    asyncReducer
  } = props

  const navigate = useNavigate()
  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducer as ReducersMapObject<StateSchema>,
    navigate
  )

  return (
        <Provider store={store}>
            {children}
        </Provider>
  )
}
