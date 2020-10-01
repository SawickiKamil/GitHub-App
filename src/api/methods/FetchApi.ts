import axios from 'axios'
import { IGitHubUser, IUserDetails } from '../../model/model'

const API_URL = 'https://api.github.com/users'

export const getGitHubUsers = async (since: number, perPage: number): Promise<IGitHubUser[]> => {
  const { data } = await axios.get(API_URL.concat(`?since=${since}&per_page=${perPage}`))
  return data
}

export const getGithubUser = async (username: string): Promise<IUserDetails> => {
  const { data } = await axios.get(API_URL.concat(`/${username}`))
  return data
}
