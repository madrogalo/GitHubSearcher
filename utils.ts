export const fetchUsers = async () => {
  const users = await fetch('https://api.github.com/users')
  return users.json()
}

export const fetchUsersByName = async (name: string | string[]) => {
  const users = await fetch(`https://api.github.com/users/${name}`)
  return users.json()
}

export const fetchUsersByNameAndRepo = async (name: string | string[], repoName: string) => {
  const repo = await fetch(`https://api.github.com/repos/${name}/${repoName}`)
  return repo.json();
}

export const fetchAllUsersRepo = async (name: string | string[]) => {
  const repos = await fetch(`https://api.github.com/users/${name}/repos`);
  return repos.json();
}
