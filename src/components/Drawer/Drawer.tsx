import React from 'react'
import { Drawer as MuiDrawer } from '@mui/material'

const Drawer = React.forwardRef(function Drawer(
  inProps,
  ref: React.ForwardedRef<any>,
) {
  const props = {
    ...inProps,
  }

  return <MuiDrawer ref={ref} {...props} />
})

export default Drawer
