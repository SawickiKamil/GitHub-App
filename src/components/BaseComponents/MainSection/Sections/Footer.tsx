import * as React from 'react'
import useStyles from '../MainSection.styles'
import { Typography, Link } from '@material-ui/core'

const Footer: React.FC = () => {
  const classes = useStyles()

  return (
    <footer className={classes.footerWrapper}>
      <Typography className={classes.footerLinkStyle}>
        This tiny app was created By{' '}
        <Link target="_blank" href="https://github.com/SawickiKamil">
          Kamil Sawicki
        </Link>
      </Typography>
    </footer>
  )
}

export default Footer
