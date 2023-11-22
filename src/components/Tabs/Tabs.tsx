import React from 'react'
import { Tabs as MuiTabs } from '@mui/material'

const Tabs = React.forwardRef(function Tabs(
  inProps: any,
  ref: React.ForwardedRef<any>,
) {
  const props = {
    ...inProps,
  }

  return <MuiTabs ref={ref} {...props} />
})

export default Tabs
