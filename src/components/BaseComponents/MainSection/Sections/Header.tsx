import * as React from 'react'
import useStyles from '../MainSection.styles'
import { Typography } from '@material-ui/core'

interface IHeaderProps {
  title?: string
}

const Header = ({ title }: IHeaderProps) => {
  const classes = useStyles()

  return (
    <header className={classes.headerWrapper}>
      <Typography variant="h1" className={classes.titleStyle}>
        {title}
      </Typography>
    </header>
  )
}

export default Header
