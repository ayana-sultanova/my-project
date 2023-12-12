import { type StateSchema } from 'app/providers/StoryProvider'

export const getArticleCommentsIsLoading = (state: StateSchema) => state.articleDetailsPage?.comments?.isLoading
export const getArticleCommentsError = (state: StateSchema) => state.articleDetailsPage?.comments?.error
