import React from 'react'
import { List as MuiList } from '@mui/material'

const List = React.forwardRef(function List(
  inProps,
  ref: React.ForwardedRef<any>,
) {
  const props = {
    ...inProps,
  }

  return <MuiList ref={ref} {...props} />
})

export default List
