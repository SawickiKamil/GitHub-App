import * as React from 'react'
import useStyles from '../UserProfile.styles'
import { Typography } from '@material-ui/core'

interface IUserDetailsProps {
  avatar: string
  alt: string
  name: string
  login: string
  repos: number
}

const UserDetails = ({ avatar, alt, name, login, repos }: IUserDetailsProps) => {
  const classes = useStyles()

  const publicRepos = repos === 0
  const anonymous = ''

  return (
    <div className={classes.userDetailsWrapper}>
      <img className={classes.avatarStyle} src={avatar} alt={alt} />
      <div>
        <Typography className={classes.nameStyle}>Hi {anonymous ? 'I am anonymous' : `my name is ${name}`}</Typography>
        <Typography className={classes.userAccountStyle}>Follow my account - {login}</Typography>
        <Typography className={classes.amountOfRepositoriesStyle}>
          {publicRepos ? 'Opsss... I have no public repositories' : `On my GitHub you can find ${repos} repositories`}
        </Typography>
      </div>
    </div>
  )
}

export default UserDetails
