import React from 'react'
import { Icon as MuiIcon } from '@mui/material'

const Icon = React.forwardRef(function Icon(
  inProps,
  ref: React.ForwardedRef<any>,
) {
  const props = {
    ...inProps,
  }

  return <MuiIcon ref={ref} {...props} />
})

export default Icon
