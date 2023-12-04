import { type StateSchema } from 'app/providers/StoryProvider'

export const getAddCommentFormText = (state: StateSchema) => state.addCommentForm?.text
export const getAddCommentFormError = (state: StateSchema) => state.addCommentForm?.error
