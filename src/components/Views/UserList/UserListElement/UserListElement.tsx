import * as React from 'react'
import useStyles from './UserListElement.styles'
import { Button, Typography, Paper } from '@material-ui/core'

interface IUserListElement {
  login?: string
  avatarUrl?: string
  handleClick?: () => void
}

const UserListElement = ({ login, avatarUrl, handleClick }: IUserListElement) => {
  const classes = useStyles()

  return (
    <Paper elevation={4} className={classes.mainWrapper}>
      <Typography className={classes.loginStyle}>{login}'s Profile</Typography>
      <div className={classes.bodyWrapper}>
        <img className={classes.avatarStyle} src={avatarUrl} alt={login} />
        <Button className={classes.buttonStyle} onClick={handleClick}>
          Visit GitHub Profile
        </Button>
      </div>
    </Paper>
  )
}

export default UserListElement
