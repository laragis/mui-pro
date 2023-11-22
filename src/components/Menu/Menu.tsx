import React from 'react'
import { Menu as MuiMenu } from '@mui/material'

const Menu = React.forwardRef(function Menu(
  inProps: any,
  ref: React.ForwardedRef<any>,
) {
  const props = {
    ...inProps,
  }

  return <MuiMenu ref={ref} {...props} />
})

export default Menu
