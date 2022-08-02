import React from 'react'
import { useSelector } from 'react-redux'
// import Loading from '../Loading/Loading'
import { selectIsLoading } from '@/app/slices/uiSlice'
import { Outlet } from 'react-router-dom'

const RequireAuth = () => {
  const loading = useSelector(selectIsLoading)

  if (loading) {
    return <h1>Loading...</h1>
  }

  return <Outlet />
}

export default RequireAuth
