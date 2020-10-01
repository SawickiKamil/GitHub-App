import * as React from 'react'
import useStyles from './UserProfile.styles'
import { Typography } from '@material-ui/core'
import Buttons from './Buttons'
import MainSection from '../../BaseComponents/MainSection'
import CustomCircularProgress from '../../BaseComponents/CustomCircularProgress'
import { useUserProfile } from './useUserProfile'

export const UserProfile: React.FC = () => {
  const classes = useStyles()

  // custom hook
  const { user, handleButtonClick } = useUserProfile()

  const title = 'User Profile Page'
  const publicRepos = user?.public_repos === 0
  const anonymous = ''

  return (
    <MainSection title={title}>
      <div className={classes.mainWrapper}>
        {!user ? (
          <CustomCircularProgress />
        ) : (
          //TODO create at least 2 separate components
          <div className={classes.contentWrapper}>
            <div className={classes.userDetailsWrapper}>
              <img className={classes.avatarStyle} src={user.avatar_url} alt={user.name} />
              <div>
                <Typography className={classes.nameStyle}>
                  Hi {anonymous ? 'I am anonymous' : `my name is ${user.name}`}
                </Typography>
                <Typography className={classes.userAccountStyle}>Follow my account - {user.login}</Typography>
                <Typography className={classes.amountOfRepositoriesStyle}>
                  {publicRepos
                    ? 'Opsss... I have no public repositories'
                    : `On my GitHub you can find ${user.public_repos} repositories`}
                </Typography>
              </div>
            </div>
            <Buttons href={user.html_url} onButtonClick={handleButtonClick} />
          </div>
        )}
      </div>
    </MainSection>
  )
}

export default UserProfile
