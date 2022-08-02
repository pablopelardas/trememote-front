import React from 'react'
import { useParams } from 'react-router-dom'
import useFetchPost from './useFetchPost'
import PostForm from '@/features/Posts/PostForm.jsx'
const PostEditor = () => {
  const { id } = useParams()
  const { post, postFetched } = useFetchPost(id)

  const content = !postFetched
    ? <h1>Loading...</h1>
    : <PostForm post={post} />

  return (
    <section className='flex justify-center items-center'>
      {content}
    </section>
  )
}

export default PostEditor
