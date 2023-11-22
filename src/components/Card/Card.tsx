import React from 'react'
import { Card as MuiCard } from '@mui/material'

const Card = React.forwardRef(function Button(
  inProps,
  ref: React.ForwardedRef<any>,
) {
  const props = {
    ...inProps,
  }

  return <MuiCard ref={ref} {...props} />
})

export default Card
