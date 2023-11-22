import React from 'react'
import { Tooltip as MuiTooltip } from '@mui/material'

const Tooltip = React.forwardRef(function Tooltip(
  inProps: any,
  ref: React.ForwardedRef<any>,
) {
  const props = {
    ...inProps,
  }

  return <MuiTooltip ref={ref} {...props} />
})

export default Tooltip
