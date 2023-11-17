import { type StateSchema } from 'app/providers/StoryProvider'
import { getCounterValue } from './getCounterValue'

describe('getCounterValue.test', () => {
  test('', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 }
    }
    expect(getCounterValue(state as StateSchema)).toEqual(10)
  })
})
