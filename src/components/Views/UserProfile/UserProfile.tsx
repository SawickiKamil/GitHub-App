import * as React from 'react'
import useStyles from './UserProfile.styles'
import MainSection from '../../BaseComponents/MainSection'
import CustomCircularProgress from '../../BaseComponents/CustomCircularProgress'
import { useUserProfile } from './useUserProfile'
import LinkButton from '../../BaseComponents/Buttons/LinkButton'
import BackwardsButton from '../../BaseComponents/Buttons/BackwardsButton'
import UserDetails from './UserDetails'

export const UserProfile: React.FC = () => {
  const classes = useStyles()

  // custom hook
  const { user, handleButtonClick } = useUserProfile()

  const title = 'User Profile Page'

  return (
    <MainSection title={title}>
      <div className={classes.mainWrapper}>
        {!user ? (
          <CustomCircularProgress />
        ) : (
          <div className={classes.contentWrapper}>
            <UserDetails
              avatar={user.avatar_url}
              alt={user.name}
              name={user.name}
              login={user.login}
              repos={user?.public_repos}
            />
            <div className={classes.buttonWrapper}>
              <LinkButton text="Visit my GitHub account" href={user.html_url} />
              <BackwardsButton onButtonClick={handleButtonClick} text="Back To The List" />
            </div>
          </div>
        )}
      </div>
    </MainSection>
  )
}

export default UserProfile
