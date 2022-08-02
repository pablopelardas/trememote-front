import React from 'react'
import { useLocation } from 'react-router-dom'
import AuthForm from '@/features/Authentication/AuthForm.jsx'

const Auth = () => {
  const { pathname } = useLocation()

  return (
    <section className='flex justify-center items-center'>
      <AuthForm type={pathname.includes('/login') ? 'login' : 'register'} />
    </section>
  )
}

export default Auth
