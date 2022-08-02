import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '@/views/Layout.jsx'
import Home from '@/views/Home/Home.jsx'
import Auth from '@/views/Auth/Auth.jsx'
import { useGetUserAuthQuery } from './services/authApiSlice.js'
import RequireAuth from '@/features/Authentication/RequireAuth.jsx'
import PostEditor from './views/PostEditor/PostEditor'
function App () {
  useGetUserAuthQuery()
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route element={<RequireAuth />}>
          <Route index element={<Home />} />
          <Route path="/edit/:id" element={<PostEditor />} />
          <Route path='/create' element={<PostEditor />} />
          <Route path='/login' element={<Auth />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
