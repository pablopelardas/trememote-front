import { apiSlice } from '../app/api/apiSlice'
import { logOut, setCredentials } from '../app/slices/userSlice'
import { setIsLoading } from '../app/slices/uiSlice'

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: '/auth/login',
        method: 'POST',
        body: { ...credentials }
      }),
      async onQueryStarted (query, { dispatch, queryFulfilled }) {
        console.log(query)
        try {
          const { data } = await queryFulfilled
          // onSuccess
          dispatch(setCredentials({ user: data.user, accessToken: data.accessToken }))
        } catch (error) {
          // onError
          console.log(error)
        }
      }
    }),
    getUserAuth: builder.query({
      query: () => '/auth',
      async onQueryStarted (_, { dispatch, queryFulfilled }) {
        dispatch(setIsLoading(true))
        try {
          const { data } = await queryFulfilled
          // onSuccess
          dispatch(setCredentials({ user: data.user, accessToken: data.accessToken, authFetched: true }))
        } catch (error) {
          dispatch(setCredentials({ user: null, accessToken: null, authFetched: true }))
          console.log('Error fetching user')
        } finally {
          dispatch(setIsLoading(false))
        }
      }
    }),
    register: builder.mutation({
      query: credentials => ({
        url: '/auth/register',
        method: 'POST',
        body: { ...credentials }
      })
    }),
    logOut: builder.mutation({
      query: () => '/auth/logout',
      async onQueryStarted (_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled
          dispatch(logOut())
        } catch (err) { console.log(err) }
      }
    })
  })
})

export const {
  useLoginMutation,
  useGetUserAuthQuery,
  useRegisterMutation,
  useLogOutMutation
} = authApiSlice
