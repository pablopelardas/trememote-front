import React from 'react'
import PostCard from './PostCard'
import { useSelector } from 'react-redux'
import { selectCurrentPosts } from '@/app/slices/postSlice'

const PostContainer = () => {
  const users = useSelector(selectCurrentPosts)
  return (
    <div className='flex flex-wrap justify-center'>
      {users.rows?.map(user => {
        const posts = user.Posts?.slice(0, 3)
        return posts.map(post => <PostCard key={post.id} author={user.username} postData={post} />)
      })}
    </div>
  )
}

export default PostContainer
