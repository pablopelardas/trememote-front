import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentPosts } from '../app/slices/postSlice'
import { useGetUsersMutation } from '../services/postApiSlice'

const usePagination = (itemsPerPage = 15, type) => {
  const [getUsers] = useGetUsersMutation()
  const [page, setPage] = useState(0)

  const users = useSelector(selectCurrentPosts)

  const types = {
    users
  }
  const items = types[type]

  const limit = Math.ceil(items?.count / itemsPerPage)

  const queryOptions = {
    limit: itemsPerPage.toString(),
    offset: (page * itemsPerPage).toString()
  }

  const queries = {
    users: () => getUsers({ ...queryOptions })
  }

  useEffect(() => {
    queries[type]()
  }, [page])

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
