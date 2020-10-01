import * as React from 'react'
import useStyles from './MainSection.styles'
import { Typography, Link } from '@material-ui/core'

interface IMainSectionProps {
  title?: string
  className?: string
}

const MainSection: React.FC<IMainSectionProps> = ({ title, children, className }) => {
  const classes = useStyles()

  return (
    <main className={classes.mainWrapper}>
      <div className={classes.bodyStyle}>
        <Typography variant="h1" className={classes.titleStyle}>
          {title}
        </Typography>
        {children}
      </div>
      <footer className={classes.footerTextStyle}>
        <Typography className={classes.footerLinkStyle}>
          This tiny app was created By{' '}
          <Link target="_blank" href="https://www.linkedin.com/in/kamil-sawicki-a9883a145/">
            Kamil Sawicki
          </Link>
        </Typography>
      </footer>
    </main>
  )
}

export default MainSection
