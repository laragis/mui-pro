import React from 'react'
import { Select as MuiSelect } from '@mui/material'

const Select = React.forwardRef(function Select(
  inProps: any,
  ref: React.ForwardedRef<any>,
) {
  const props = {
    ...inProps,
  }

  return <MuiSelect ref={ref} {...props} />
})

export default Select
