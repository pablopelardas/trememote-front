import { apiSlice } from '../app/api/apiSlice'
import { setPosts, setCurrentPost, setPostFetched } from '../app/slices/postSlice'

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
    })
  })
})

export const {
  useGetUsersMutation,
  useGetPostMutation
} = postApiSlice
