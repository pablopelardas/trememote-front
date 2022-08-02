import React from 'react'
import PostCard from './PostCard'

const PostContainer = () => {
  return (
    <div className='flex flex-wrap justify-center'>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  )
}

export default PostContainer
