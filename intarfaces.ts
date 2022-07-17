export interface ICard {
  avatarUrl: string;
  login: string;
  html_url: string;
}

export interface IUsers {
  id: string,
  avatar_url: string,
  url: string,
  login: string,
  users: any,
  html_url: string,
}

export interface IUserId {
  avatar_url: string,
  name: string
  public_repos: number,
  public_gists: number,
  followers: number,
  following: number,
  bio: string,
  email: null | string,
  location: null | string,
  created_at: string,
  html_url: string,
}

export interface ILayoutProps {
  children: React.ReactNode;
}

export interface ICardRepo {
  name: string,
  forks: number,
  stargazers_count: number,
  html_url: string,
}

export interface IRepos {
  id: number,
  name: string,
  forks: number,
  stargazers_count: number
}
export interface IUserInfo {
  user: IUserId
}
export interface ISearchPanel {
  handleSearch: any;
  placeholder: string;
}