import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '@/views/Layout.jsx'
import Home from '@/views/Home/Home.jsx'
import { useGetUserAuthQuery } from './services/authApiSlice.js'
import RequireAuth from '@/features/Authentication/RequireAuth.jsx'

function App () {
  useGetUserAuthQuery()
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route element={<RequireAuth />}>
          <Route index element={<Home />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
