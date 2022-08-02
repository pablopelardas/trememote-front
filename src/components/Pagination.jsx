import React from 'react'
import { Pagination } from '@mui/material'
import propTypes from 'prop-types'
import useWindowSize from '../hooks/useWindowSize'

const PageButtons = ({ pageButtonHandler, limit, page }) => {
  const [width, height] = useWindowSize()
  const type = width > 600 ? 'large' : 'small'

  return (
    <div className='flex justify-center mt-1 mb-4'>
      {/* {pageButtons} */}
      <div className='rounded-2xl p-[1px] bg-slate-50'>
        <Pagination page={page + 1} count={limit} showFirstButton showLastButton color='primary' size={type} onChange={pageButtonHandler}/>
      </div>
    </div>
  )
}

PageButtons.propTypes = {
  pageButtonHandler: propTypes.func.isRequired,
  limit: propTypes.string,
  page: propTypes.number
}

export default PageButtons
