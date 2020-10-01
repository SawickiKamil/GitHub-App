import axios from 'axios'
import { IGitHubUser, IUserDetails } from '../../model/model'

export const getGitHubUsers = async (apiUrl: string): Promise<IGitHubUser[]> => {
  const { data } = await axios.get(apiUrl)

  return data
}

export const getGithubUser = async (username: string): Promise<IUserDetails> => {
  const { data } = await axios.get(`https://api.github.com/users/${username}`)
  return data
}
