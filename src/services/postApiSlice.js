import { apiSlice } from '../app/api/apiSlice'
import { setPosts, setCurrentPost, setPostFetched, setPostsByUser } from '../app/slices/postSlice'

export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getUsers: builder.mutation({
      query: ({ limit, offset }) => {
        const url = `/users?limit=${limit}&offset=${offset}`
        return {
          url
        }
      },
      async onQueryStarted (_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(setPosts(data))
        } catch (err) {
          console.log('Error fetching post!')
          console.log(err)
        }
      }
    }),
    getPost: builder.mutation({
      query: (id) => {
        const url = `/posts/${id}`
        return {
          url
        }
      },
      async onQueryStarted (_, { dispatch, queryFulfilled }) {
        try {
          dispatch(setPostFetched(false))
          const { data } = await queryFulfilled
          dispatch(setCurrentPost(data))
        } catch (err) {
          console.log('Error fetching post!')
          console.log(err)
        } finally {
          dispatch(setPostFetched(true))
        }
      }
    }),
    createPost: builder.mutation({
      query: (post) => {
        const url = '/posts'
        return {
          url,
          method: 'POST',
          body: post
        }
      }
    }),
    updatePost: builder.mutation({
      query: ({ id, post }) => {
        const url = `/posts/${id}`
        return {
          url,
          method: 'PATCH',
          body: post
        }
      }
    }),
    getPostsByUser: builder.mutation({
      query: ({ userId, limit, offset }) => {
        const url = `/posts/${userId}/posts?limit=${limit}&offset=${offset}`
        return {
          url
        }
      },
      async onQueryStarted (_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(setPostsByUser(data))
        } catch (err) {
          console.log('Error fetching post!')
          console.log(err)
        }
      }
    })
  })
})

export const {
  useGetUsersMutation,
  useGetPostMutation,
  useCreatePostMutation,
  useUpdatePostMutation,
  useGetPostsByUserMutation
} = postApiSlice
