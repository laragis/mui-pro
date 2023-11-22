import React from 'react'
import { ButtonGroup as MuiButtonGroup } from '@mui/material'

const ButtonGroup = React.forwardRef(function Button(
  inProps,
  ref: React.ForwardedRef<any>,
) {
  const props = {
    ...inProps,
  }

  return <MuiButtonGroup ref={ref} {...props} />
})

export default ButtonGroup
