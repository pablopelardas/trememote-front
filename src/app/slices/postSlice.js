import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
  post: null,
  postsByUser: null,
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
    },
    setPostsByUser: (state, action) => {
      state.postsByUser = action.payload
    }
  }
})

export const { setPosts, setCurrentPost, setPostFetched, setPostsByUser } = postSlice.actions

export const selectCurrentPosts = (state) => state.post.users
export const selectCurrentPost = (state) => state.post.post
export const selectPostFetched = (state) => state.post.postFetched
export const selectPostsByUser = (state) => state.post.postsByUser

export default postSlice.reducer
