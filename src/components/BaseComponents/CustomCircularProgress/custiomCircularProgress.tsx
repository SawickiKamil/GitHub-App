import * as React from 'react'
import useStyles from './CustomCircularProgress.styles'
import { CircularProgress } from '@material-ui/core'

const CustomCircularProgress = () => {
  const classes = useStyles()

  return <CircularProgress classes={{ root: classes.circularSpinnerRoot }} />
}

export default CustomCircularProgress
