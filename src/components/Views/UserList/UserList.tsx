import * as React from 'react'
import { getGitHubUsers } from '../../../api/methods/FetchApi'
import { IGitHubUser } from '../../../model/model'
import UserListElement from './UserListElement'
import MainSection from '../../BaseComponents/MainSection'
import useStyles from './UserListElement.styles'
import { useHistory } from 'react-router'
import CustomCircularProgress from '../../BaseComponents/CustomCircularProgress'

const UserList = () => {
  const classes = useStyles()
  const [gitHubUsers, setGitHubUsers] = React.useState<IGitHubUser[]>([])
  const [loadingPage, setLoadingPage] = React.useState(true)
  const [loadingUsers, setLoadingUser] = React.useState(false)
  const perPage = 10
  const title = 'GitHub Application'
  let history = useHistory()

  const loadUsers = React.useCallback(async () => {
    const lastId = gitHubUsers.length ? Math.max(...gitHubUsers.map((item) => item.id as number)) : 0

    const data = await getGitHubUsers(lastId, perPage)
    await new Promise((resolve) => setTimeout(resolve, 800))
    setLoadingPage(false)
    setGitHubUsers((prev) => [...prev, ...data])
  }, [gitHubUsers, setGitHubUsers])

  const handleButtonClick = React.useCallback(
    (username: string) => {
      history.push(`/user/${username}`)
    },
    [history]
  )

  React.useEffect(() => {
    loadUsers()
  }, [])

  const handleScrollEvent = React.useCallback(
    async (event: React.UIEvent<HTMLDivElement>) => {
      const target = event.currentTarget

      if (!loadingUsers && target.scrollHeight - target.scrollTop === target.clientHeight) {
        setLoadingUser(true)
        await new Promise((resolve) => setTimeout(resolve, 500))
        await loadUsers()
        setLoadingUser(false)
      }
    },
    [loadingUsers, gitHubUsers.length]
  )

  return (
    <MainSection className={classes.listWrapper} title={title}>
      {!loadingPage ? (
        <>
          <div onScroll={handleScrollEvent} className={classes.listWrapper}>
            <div className={classes.listWrapperBody}>
              {gitHubUsers?.map((item) => (
                <UserListElement
                  handleClick={() => handleButtonClick(item.login)}
                  key={item.id}
                  login={item.login}
                  avatarUrl={item.avatar_url}
                />
              ))}
              {loadingUsers && <CustomCircularProgress />}
            </div>
          </div>
        </>
      ) : (
        <div className={classes.spinnerWrapper}>
          <CustomCircularProgress />
        </div>
      )}
    </MainSection>
  )
}

export default UserList
