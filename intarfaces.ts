export interface ICard {
  avatarUrl: string;
  login: string;
  url: string;
}

export interface IUsers {
  id: string,
  avatar_url: string,
  url: string,
  login: string,
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
  location: null | string
  created_at: string
}


export interface LayoutProps {
  children: React.ReactNode;
}

export interface ICardRepo {
  name: string,
  forks: number,
  stargazers_count: number
}

export interface IRepos {
  id: number,
  name: string,
  forks: number,
  stargazers_count: number
}