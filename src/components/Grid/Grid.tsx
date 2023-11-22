import React from 'react'
import { Grid as MuiGrid } from '@mui/material'

const Grid = React.forwardRef(function Grid(
  inProps,
  ref: React.ForwardedRef<any>,
) {
  const props = {
    ...inProps,
  }

  return <MuiGrid ref={ref} {...props} />
})

export default Grid
