import * as React from 'react'
import useStyles from '../UserProfile.styles'
import BackwardsButton from '../../../BaseComponents/Buttons/BackwardsButton'
import LinkButton from '../../../BaseComponents/Buttons/LinkButton'

interface IButtonsProps {
  onButtonClick: () => void
  href: string
}

const Buttons = ({ onButtonClick, href }: IButtonsProps) => {
  const classes = useStyles()

  return (
    <div className={classes.buttonWrapper}>
      <LinkButton text="Visit my GitHub account" href={href} />
      <BackwardsButton onButtonClick={onButtonClick} text="Back To The List" />
    </div>
  )
}

export default Buttons
