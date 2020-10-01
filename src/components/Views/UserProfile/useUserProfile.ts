import * as React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { IUserDetails } from '../../../model/model'
import { getGithubUser } from '../../../api/methods/FetchApi'

interface IUserProfileRouteParams {
  username?: string
}

export const useUserProfile = () => {
  let history = useHistory()
  const [user, setUser] = React.useState<IUserDetails>()

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
    history.push('/')
  }, [history])

  return { user, handleButtonClick }
}
