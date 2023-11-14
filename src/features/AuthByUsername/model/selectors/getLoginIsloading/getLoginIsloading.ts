import { type StateSchema } from 'app/providers/StoryProvider'

export const getLoginIsloading = (state: StateSchema) => state?.loginForm?.isLoading || false
