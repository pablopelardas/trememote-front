import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: []
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload
    },
    addPost: (state, action) => {
      state.posts.push(action.payload)
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter(post => post.id !== action.payload)
    },
    updatePost: (state, action) => {
      const index = state.posts.findIndex(post => post.id === action.payload.id)
      state.posts[index] = action.payload
    }
  }
})

export const { setPosts, addPost, deletePost, updatePost } = postSlice.actions

export const selectCurrentPosts = (state) => state.post.posts

export default postSlice.reducer
