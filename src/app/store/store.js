import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../slices/userSlice'
import postReducer from '../slices/postSlice'
import uiReducer from '../slices/uiSlice'
import { apiSlice } from '../api/apiSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userReducer,
    post: postReducer,
    ui: uiReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true
})
