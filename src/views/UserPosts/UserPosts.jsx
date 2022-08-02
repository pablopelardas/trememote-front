import React from 'react'
import PostCard from '@/features/Posts/PostCard'
import usePagination from '../../hooks/usePagination'
import Pagination from '@/components/Pagination'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectPostsByUser } from '@/app/slices/postSlice'
import getRandomColor from '@/utils/getRandomColor.js'

const UserPosts = () => {
  const { userId } = useParams()
  const postsByUser = useSelector(selectPostsByUser)
  const pagination = usePagination(5, 'postsByUser', userId)
  const content = postsByUser?.posts?.rows?.length > 0
    ? (<div className='flex flex-col w-full min-h-[500px] my-10 bg-[#04051538] shadow h-auto py-5 sm:w-11/12'>
        <Pagination page={pagination.page} limit={pagination.limit} pageButtonHandler={pagination.pageButtonHandler}/>
        <div className='flex flex-wrap justify-center'>
          {postsByUser.posts?.rows?.map(post => <PostCard color={getRandomColor()} key={post.id} postData={post} author={postsByUser.user?.username} authorId={postsByUser.user?.id}/>)}
        </div>
      </div>)
    : <h1>Loading...</h1>

  return (
    <section className='flex flex-col justify-center items-center'>
      <h1 className='text-3xl text-slate-200 bg-[#00000069] p-4 rounded-sm mt-20 sm:text-5xl'>{postsByUser?.user?.username ? `Posts de ${postsByUser?.user?.username}` : 'Cargando...'}</h1>
      {content}
    </section>
  )
}

export default UserPosts
