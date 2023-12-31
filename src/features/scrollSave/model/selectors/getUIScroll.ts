import { type StateSchema } from 'app/providers/StoryProvider'
import { createSelector } from '@reduxjs/toolkit'

export const getUIScroll = (state: StateSchema) => state.ui.scroll
export const getUIScrollByPath = createSelector(
  getUIScroll,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0
)
