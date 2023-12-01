import { type StateSchema } from 'app/providers/StoryProvider'
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './articleDetails'

describe('articleDetails', () => {
  test('should return value', () => {
    const data = {
      id: '1',
      title: 'Title'
    }
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data
      }
    }
    expect(getArticleDetailsData(state as StateSchema)).toEqual(data)
  })
  test('should return loading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true
      }
    }
    expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(true)
  })
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'error'
      }
    }
    expect(getArticleDetailsError(state as StateSchema)).toBe('error')
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined)
  })
})
