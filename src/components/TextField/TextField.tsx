import React from 'react'
import { TextField as MuiTextField } from '@mui/material'

const TextField = React.forwardRef(function TextField(
  inProps: any,
  ref: React.ForwardedRef<any>,
) {
  const props = {
    ...inProps,
  }

  return <MuiTextField ref={ref} {...props} />
})

export default TextField
