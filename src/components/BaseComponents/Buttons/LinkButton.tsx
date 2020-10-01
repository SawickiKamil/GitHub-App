import * as React from 'react'
import useStyles from './Buttons.styles'
import { Button, Link } from '@material-ui/core'

interface IBackwardsButtonProps {
  href: string
  text: string
}

const LinkButton = ({ href, text }: IBackwardsButtonProps) => {
  const classes = useStyles()

  return (
    <Link className={classes.linkButtonStyle} target="_blank" href={href}>
      {text}
    </Link>
  )
}

export default LinkButton
