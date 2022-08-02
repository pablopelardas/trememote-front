import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '@/views/Layout.jsx'
import Home from '@/views/Home/Home.jsx'
import Auth from '@/views/Auth/Auth.jsx'
import { useGetUserAuthQuery } from './services/authApiSlice.js'
import RequireAuth from '@/features/Authentication/RequireAuth.jsx'
import PostEditor from './views/PostEditor/PostEditor'
import UserPosts from './views/UserPosts/UserPosts.jsx'
function App () {
  useGetUserAuthQuery()
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/login' element={<Auth />} />
          <Route path='/:userId' element={<UserPosts />} />
          <Route path='/register' element={<Auth />} />
        <Route element={<RequireAuth />}>
          <Route path='/create' element={<PostEditor />} />
          <Route path="/edit/:id" element={<PostEditor />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
