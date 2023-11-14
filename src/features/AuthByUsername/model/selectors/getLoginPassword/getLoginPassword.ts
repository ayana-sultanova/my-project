import { type StateSchema } from 'app/providers/StoryProvider'

export const getLoginPassword = (state: StateSchema) => state?.loginForm?.password || ''
