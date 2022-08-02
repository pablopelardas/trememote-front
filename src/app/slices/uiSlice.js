import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
  name: 'ui',
  initialState: { isLoading: false, menu: false },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setMenu: (state, action) => {
      state.menu = action.payload
    }
  }
})

export const { setIsLoading, setMenu } = uiSlice.actions
export default uiSlice.reducer

export const selectIsLoading = (state) => state.ui.isLoading
export const selectMenu = (state) => state.ui.menu
