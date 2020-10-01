import * as React from 'react'
import { getGitHubUsers } from '../../../api/methods/FetchApi'
import { IGitHubUser } from '../../../model/model'
import { useHistory } from 'react-router'

export const useUserList = () => {
  const [gitHubUsers, setGitHubUsers] = React.useState<IGitHubUser[]>([])
  const [loadingPage, setLoadingPage] = React.useState(true)
  const [loadingUsers, setLoadingUser] = React.useState(false)
  const perPage = 10
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
        // TODO take it in to account - delay can be pointless here
        await new Promise((resolve) => setTimeout(resolve, 500))
        await loadUsers()
        setLoadingUser(false)
      }
    },
    [loadingUsers, gitHubUsers.length]
  )
  return { loadingPage, handleScrollEvent, gitHubUsers, handleButtonClick, loadingUsers }
}
