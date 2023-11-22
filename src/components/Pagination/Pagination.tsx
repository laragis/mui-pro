import React from 'react'
import { Pagination as MuiPagination } from '@mui/material'

const Pagination = React.forwardRef(function Pagination(
  inProps: any,
  ref: React.ForwardedRef<any>,
) {
  const props = {
    ...inProps,
  }

  return <MuiPagination ref={ref} {...props} />
})

export default Pagination
