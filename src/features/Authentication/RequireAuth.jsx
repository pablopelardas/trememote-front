import React from 'react'
import { useSelector } from 'react-redux'
// import Loading from '../Loading/Loading'
import { selectIsLoading } from '@/app/slices/uiSlice'
import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { selectCurrentToken } from '../../app/slices/userSlice'

const RequireAuth = () => {
  const loading = useSelector(selectIsLoading)
  const location = useLocation()
  const token = useSelector(selectCurrentToken)

  if (loading) {
    return <h1>Loading...</h1>
  }

  return token
    ? <Outlet />
    : <Navigate to='/login' state={{ from: location }} replace />
}

export default RequireAuth
