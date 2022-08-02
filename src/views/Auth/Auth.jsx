import React from 'react'
import { useLocation } from 'react-router-dom'
import Login from '@/features/Authentication/Login.jsx'
import Register from '@/features/Authentication/Register.jsx'

const Auth = () => {
  const { pathname } = useLocation()
  const content = pathname.includes('/login')
    ? <Login />
    : <Register />
  return (
    <section className='flex justify-center items-center'>
      {content}
    </section>
  )
}

export default Auth
