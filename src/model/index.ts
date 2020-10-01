export interface IGitHubUser {
  id: number
  login: string
  avatar_url: string
}

export interface IUserDetails extends IGitHubUser {
  public_repos: number
  name: string
  html_url: string
}
