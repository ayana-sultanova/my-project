import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type UISchema } from '../types/UISchema'

const initialState: UISchema = {
  scroll: {}
}

export const scrollSaveSlice = createSlice({
  name: 'scrollSaveSlice',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{ path: string, position: number }>) => {
      state.scroll[payload.path] = payload.position
    }
  }
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchProfileData.pending, (state) => {
  //     })
  //   .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<any>) => {
  //   })
  // .addCase(fetchProfileData.rejected, (state, action) => {
  // })
  // }
})

export const { actions: scrollSaveActions } = scrollSaveSlice
export const { reducer: scrollSaveReducer } = scrollSaveSlice
