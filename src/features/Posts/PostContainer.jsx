import React from 'react'
import PostCard from './PostCard'
import getRandomColor from '@/utils/getRandomColor.js'
import { useSelector } from 'react-redux'
import { selectCurrentPosts } from '@/app/slices/postSlice'

const PostContainer = () => {
  const users = useSelector(selectCurrentPosts)
  return (
    <div className='flex flex-wrap justify-center'>
      {users.rows?.map(user => {
        const color = getRandomColor()
        const posts = user.Posts?.slice(0, 3)
        return posts.map(post => <PostCard color={color} key={post.id} author={user.username} authorId={user.id} postData={post} />)
      })}
    </div>
  )
}

export default PostContainer
