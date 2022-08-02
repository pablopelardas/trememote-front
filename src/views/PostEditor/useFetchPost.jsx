import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useGetPostMutation } from '../../services/postApiSlice'
import { selectCurrentPost, selectPostFetched, setPostFetched, setCurrentPost } from '@/app/slices/postSlice'

const useFetchPost = (postId) => {
  const dispatch = useDispatch()
  const [getPost] = useGetPostMutation()
  const post = useSelector(selectCurrentPost)
  const postFetched = useSelector(selectPostFetched)

  useEffect(() => {
    if (postId) {
      getPost(postId)
    } else {
      dispatch(setPostFetched(true))
    }
    return () => {
      dispatch(setPostFetched(false))
      dispatch(setCurrentPost(null))
    }
  }, [])

  return { post, postFetched }
}

export default useFetchPost
