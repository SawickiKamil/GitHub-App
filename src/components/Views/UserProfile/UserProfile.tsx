import * as React from 'react'
import useStyles from './UserProfile.styles'
import { Typography, Link, Button, CircularProgress } from '@material-ui/core'
import { useHistory, RouteComponentProps, useParams } from 'react-router-dom'
import MainSection from '../BaseComponents/MainSection'
import { IUserDetails } from '../../../model/model'
import { getGithubUser } from '../../../api/methods/FetchApi'

interface IUserProfileRouteParams {
  username?: string
}

interface IUserProfileProps extends RouteComponentProps<{ username: string }> {}

export const UserProfile = (props: IUserProfileProps) => {
  const classes = useStyles()
  let history = useHistory()
  const [user, setUser] = React.useState<IUserDetails>()
  const title = 'User Profile Page'
  const publicRepos = user?.public_repos === 0

  const params: IUserProfileRouteParams = useParams()
  React.useEffect(() => {
    const getUserDetails = async () => {
      if (params.username) {
        const data = await getGithubUser(params.username)
        setUser(data)
      }
    }
    getUserDetails()
  }, [])

  const handleButtonClick = React.useCallback(() => {
    history.goBack()
  }, [history])

  if (!user) {
    return <CircularProgress />
  }

  return (
    <MainSection title={title}>
      <div className={classes.userDetailsWrapper}>
        <img className={classes.avatarStyle} src={user.avatar_url} alt={user.name} />
        <div>
          <Typography className={classes.nameStyle}> Hi my name is {user.name}</Typography>
          <Typography className={classes.userAccountStyle}>Follow my account - {user.login}</Typography>
          <Typography className={classes.amountOfRepositoriesStyle}>
            {publicRepos
              ? 'Opsss... I have no public repositories'
              : `On my GitHub you can find ${user.public_repos} repositories`}
          </Typography>
        </div>
      </div>
      <Link className={classes.linkButtonStyle} target="_blank" href={user.html_url}>
        Visit my GitHub account
      </Link>
      <Button onClick={handleButtonClick} className={classes.backwardsButtonStyle}>
        Step Backwards
      </Button>
    </MainSection>
  )
}

export default UserProfile
