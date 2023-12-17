import { counterActions, counterReducer } from './model/slice/counterSlice'
import type { CounterSchema } from './model/types/CounterSchema'
import { Counter } from './ui/Counter'

export {
  counterReducer,
  Counter,
  type CounterSchema,
  counterActions
}
