import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentPosts, selectPostsByUser } from '../app/slices/postSlice'
import { useGetUsersMutation, useGetPostsByUserMutation } from '../services/postApiSlice'

const usePagination = (itemsPerPage = 15, type, userId = null) => {
  const [getUsers] = useGetUsersMutation()
  const [getPostsByUser] = useGetPostsByUserMutation()
  const [page, setPage] = useState(0)

  const users = useSelector(selectCurrentPosts)
  const postsByUser = useSelector(selectPostsByUser)

  const types = {
    users,
    postsByUser
  }
  const items = types[type]

  const limit = type === 'postsByUser'
    ? Math.ceil(items?.posts?.count / itemsPerPage)
    : Math.ceil(items?.count / itemsPerPage)

  const queryOptions = {
    limit: itemsPerPage.toString(),
    offset: (page * itemsPerPage).toString()
  }

  const queries = {
    users: () => getUsers({ ...queryOptions }),
    postsByUser: () => getPostsByUser({ userId, ...queryOptions })
  }

  useEffect(() => {
    if (type === 'postsByUser' && userId) {
      queries[type]()
    }
    if (type === 'users') {
      queries[type]()
    }
  }, [page, userId])

  const nextHandler = () => {
    return page < limit - 1 && setPage(page + 1)
  }

  const pageButtonHandler = (e, page) => {
    setPage(page - 1)
  }

  const prevHandler = () => {
    return page > 0 && setPage(page - 1)
  }

  return {
    nextHandler,
    prevHandler,
    pageButtonHandler,
    setPage,
    limit,
    page
  }
}

export default usePagination
