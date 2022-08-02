import React from 'react'
import getFormattedDate from '@/utils/getFormattedDate'
import { selectCurrentUser } from '@/app/slices/userSlice'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'
import EditIcon from '@/assets/EditIcon'
const PostCard = ({ postData, author, authorId, color }) => {
  const user = useSelector(selectCurrentUser)
  return (
  <div className="p-10">
    <div className=" max-w-lg">
      <div className={`${color} border-r border-b border-l shadow-2xl border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal`}>
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2 flex justify-between items-center">
            <span>{postData.title}</span>
            {authorId === user?.id && <Link to={`/edit/${postData.id}`}><span><EditIcon /></span></Link>}
          </div>
          <p className="text-gray-700 text-base">{postData.content}</p>
        </div>
        <div className="flex items-center">
        <Link to={`/${authorId}`}>
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{author}</p>
            <p className="text-gray-600">{getFormattedDate(postData.createdAt)}</p>
          </div>
        </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

PostCard.propTypes = {
  postData: propTypes.object.isRequired,
  author: propTypes.string.isRequired,
  authorId: propTypes.number.isRequired,
  color: propTypes.string.isRequired
}

export default PostCard
