import React from 'react'
import PostContainer from '../../features/Posts/PostContainer'
import usePagination from '../../hooks/usePagination'
import Pagination from '@/components/Pagination'
import { useSelector } from 'react-redux'
import { selectCurrentPosts } from '@/app/slices/postSlice.js'

const Home = () => {
  const users = useSelector(selectCurrentPosts)
  const pagination = usePagination(3, 'users')
  const content = users
    ? (<div className='flex flex-col w-full min-h-[500px] my-20 bg-[#04051538] shadow h-auto py-5 sm:w-11/12'>
        <Pagination page={pagination.page} limit={pagination.limit} pageButtonHandler={pagination.pageButtonHandler}/>
        <PostContainer />
      </div>)
    : <h1>Loading...</h1>

  return (
    <section className='flex justify-center'>
      {content}
    </section>
  )
}

export default Home
