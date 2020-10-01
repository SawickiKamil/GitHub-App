import * as React from 'react'
import useStyles from './Buttons.styles'
import { Button } from '@material-ui/core'

interface IBackwardsButtonProps {
  onButtonClick: () => void
  text: string
}

const BackwardsButton = ({ onButtonClick, text }: IBackwardsButtonProps) => {
  const classes = useStyles()

  return (
    <Button onClick={onButtonClick} className={classes.backwardsButtonStyle}>
      {text}
    </Button>
  )
}

export default BackwardsButton
