import React from 'react'
import { Button as MuiButton } from '@mui/material'

const Button = React.forwardRef(function Button(
  inProps,
  ref: React.ForwardedRef<any>,
) {
  const props = {
    ...inProps,
  }

  return <MuiButton ref={ref} {...props} />
})

export default Button
