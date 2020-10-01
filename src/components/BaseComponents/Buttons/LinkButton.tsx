import * as React from 'react'
import useStyles from './Buttons.styles'
import { Link } from '@material-ui/core'

interface ILinkButtonProps {
  href: string
  text: string
}

const LinkButton = ({ href, text }: ILinkButtonProps) => {
  const classes = useStyles()

  return (
    <Link className={classes.linkButtonStyle} target="_blank" href={href}>
      {text}
    </Link>
  )
}

export default LinkButton
