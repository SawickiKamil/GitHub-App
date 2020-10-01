import * as React from 'react'
import useStyles from './Buttons.styles'
import { Button } from '@material-ui/core'

interface IVisitButtonProps {
  onButtonClick: () => void
  text: string
}

const VisitButton = ({ onButtonClick, text }: IVisitButtonProps) => {
  const classes = useStyles()

  return (
    <Button onClick={onButtonClick} className={classes.visitButtonStyle}>
      {text}
    </Button>
  )
}

export default VisitButton
