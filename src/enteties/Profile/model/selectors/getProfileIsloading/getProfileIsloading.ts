import { type StateSchema } from 'app/providers/StoryProvider'

export const getProfileIsloading = (state: StateSchema) => state.profile?.isLoading
