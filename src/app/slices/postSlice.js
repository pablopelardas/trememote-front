import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
  post: null,
  postFetched: false
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.users = action.payload
    },
    setCurrentPost: (state, action) => {
      console.log(action.payload)
      state.post = action.payload
    },
    setPostFetched: (state, action) => {
      state.postFetched = action.payload
    }
  }
})

export const { setPosts, setCurrentPost, setPostFetched } = postSlice.actions

export const selectCurrentPosts = (state) => state.post.users
export const selectCurrentPost = (state) => state.post.post
export const selectPostFetched = (state) => state.post.postFetched

export default postSlice.reducer
