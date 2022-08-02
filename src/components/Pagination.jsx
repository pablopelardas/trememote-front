import React from 'react'
import { Pagination as MuiPagination } from '@mui/material'
import propTypes from 'prop-types'
import useWindowSize from '../hooks/useWindowSize'

const Pagination = ({ pageButtonHandler, limit, page }) => {
  const [width, height] = useWindowSize()
  const type = width > 600 ? 'large' : 'small'

  return (
    <div className='flex justify-center mt-1 mb-4'>
      <div className='rounded-2xl p-[1px] bg-slate-50'>
        <MuiPagination page={page + 1} count={limit || 0} showFirstButton showLastButton color='primary' size={type} onChange={pageButtonHandler}/>
      </div>
    </div>
  )
}

Pagination.propTypes = {
  pageButtonHandler: propTypes.func.isRequired,
  limit: propTypes.number,
  page: propTypes.number
}

export default Pagination
