import React from 'react'
import getRandomColor from '@/utils/getRandomColor.js'
import getFormattedDate from '@/utils/getFormattedDate'
import propTypes from 'prop-types'
const PostCard = ({ postData, author }) => {
  return (
  <div className="p-10">
    <div className=" max-w-lg">
      <div className={`${getRandomColor()} border-r border-b border-l shadow-2xl border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal`}>
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">{postData.title}</div>
          <p className="text-gray-700 text-base">{postData.content}</p>
        </div>
        <div className="flex items-center">
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{author}</p>
            <p className="text-gray-600">{getFormattedDate(postData.createdAt)}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

PostCard.propTypes = {
  postData: propTypes.object.isRequired,
  author: propTypes.string.isRequired
}

export default PostCard
