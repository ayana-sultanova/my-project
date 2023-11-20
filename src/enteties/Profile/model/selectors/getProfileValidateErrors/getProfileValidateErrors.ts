import { type StateSchema } from 'app/providers/StoryProvider'

export const getProfileValidateErrors = (state: StateSchema) => state.profile?.validateError
