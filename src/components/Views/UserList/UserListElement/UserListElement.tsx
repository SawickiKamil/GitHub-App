import * as React from 'react'
import useStyles from './UserListElement.styles'
import { Typography, Paper } from '@material-ui/core'
import VisitButton from '../../../BaseComponents/Buttons/VisitButton'

interface IUserListElement {
  login?: string
  avatarUrl?: string
  handleClick: () => void
}

const UserListElement = ({ login, avatarUrl, handleClick }: IUserListElement) => {
  const classes = useStyles()

  return (
    <Paper elevation={4} className={classes.mainWrapper}>
      <Typography className={classes.loginStyle}>{login}'s Profile</Typography>
      <div className={classes.bodyWrapper}>
        <img className={classes.avatarStyle} src={avatarUrl} alt={login} />
        <VisitButton onButtonClick={handleClick} text="Visit GitHub Profile" />
      </div>
    </Paper>
  )
}

export default UserListElement
