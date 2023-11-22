import React from 'react'
import { Icon as MuiIcon } from '@mui/material'

const IconGroup = React.forwardRef(function Icon(
  inProps,
  ref: React.ForwardedRef<any>,
) {
  const props = {
    ...inProps,
  }

  return <MuiIcon ref={ref} {...props} />
})

export default IconGroup
