import React from 'react'
import { Dialog as MuiDialog } from '@mui/material'

const Dialog = React.forwardRef(function Dialog(
  inProps: any,
  ref: React.ForwardedRef<any>,
) {
  const props = {
    ...inProps,
  }

  return <MuiDialog ref={ref} {...props} />
})

export default Dialog
