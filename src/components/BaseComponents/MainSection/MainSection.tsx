import * as React from 'react'
import useStyles from './MainSection.styles'
import { Typography, Link } from '@material-ui/core'

interface IMainSectionProps {
  title?: string
  className?: string
}

const MainSection: React.FC<IMainSectionProps> = ({ title, children }) => {
  const classes = useStyles()

  return (
    <main className={classes.mainWrapper}>
      <header className={classes.headerWrapper}>
        <Typography variant="h1" className={classes.titleStyle}>
          {title}
        </Typography>
      </header>
      <section className={classes.sectionWrapper}>{children}</section>
      <footer className={classes.footerWrapper}>
        <Typography className={classes.footerLinkStyle}>
          This tiny app was created By{' '}
          <Link target="_blank" href="https://github.com/SawickiKamil">
            Kamil Sawicki
          </Link>
        </Typography>
      </footer>
    </main>
  )
}

export default MainSection
