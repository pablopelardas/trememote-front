import React from 'react'
import Menu from '../features/Ui/Menu'
import { Outlet } from 'react-router-dom'
import NavBar from '@/features/Ui/NavBar'
const Layout = () => {
  return (
    <main className='min-h-screen h-auto bg-slate-900'>
      <NavBar />
      <Outlet />
      <Menu />
    </main>
  )
}

export default Layout
