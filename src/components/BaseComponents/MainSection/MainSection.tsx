import * as React from 'react'
import useStyles from './MainSection.styles'
import Footer from './Sections/Footer'
import Header from './Sections/Header'

interface IMainSectionProps {
  title?: string
  className?: string
}

const MainSection: React.FC<IMainSectionProps> = ({ title, children }) => {
  const classes = useStyles()

  return (
    <main className={classes.mainWrapper}>
      <Header title={title} />
      <section className={classes.sectionWrapper}>{children}</section>
      <Footer />
    </main>
  )
}

export default MainSection
