import { type StateSchema } from 'app/providers/StoryProvider'

export const getProfileReadonly = (state: StateSchema) => state.profile?.readonly
