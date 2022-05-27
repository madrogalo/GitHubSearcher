import type { NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { IUserId } from "../intarfaces"
import CardRepo from "../components/cardRepo"
import { IRepos } from "../intarfaces"
import styles from "../styles/Page.module.scss"
import SearchPanel from "../components/searchPanel"
import UserInfo from "../components/userInfo"
import NoData from '../components/noData'

const UserId: NextPage = () => {
  const router = useRouter();
  const { name } = router.query;
  const [user, setUser] = useState<IUserId>({
    avatar_url: "",
    bio: "",
    created_at: "",
    email: "",
    followers: 0,
    following: 0,
    location: "",
    name: "",
    public_gists: 0,
    public_repos: 0,
  });

  const [repos, setRepos] = useState<Array<IRepos>>([]);
  const [searchInput, setSearchInput] = useState<string>('')

  useEffect(() => {
    if (name) {
      fetch(`https://api.github.com/users/${name}`)
        .then((res) => res.json())
        .then((user) => setUser(user));
    }
  }, [name]);

  useEffect(() => {
    if (name) {
      if(searchInput.length > 0) {
        fetch(`https://api.github.com/repos/${name}/${searchInput}`)
          .then((res) => res.json())
          .then((repo) => {
            if(repo.message) {
              setRepos([])
            } else {
              const arr = [repo]
              setRepos(arr)
            }

          })
          .catch(_err => setRepos([]))
      } else {
        fetch(`https://api.github.com/users/${name}/repos`)
          .then((res) => res.json())
          .then((repos) => setRepos(repos));
      }
    }
  }, [name, searchInput]);
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  }

  return (
    <div className={styles.content}>
      <UserInfo user={user} />
      <SearchPanel
        handleSearch={handleSearch}
        placeholder={`Search for ${user.name}'s Repositories`}
      />

      {repos.map((repo) => (
        <CardRepo
          key={repo.id}
          name={repo.name}
          forks={repo.forks}
          stargazers_count={repo.stargazers_count}
        />
      ))}
      {!repos.length && <NoData />}
    </div>
  );
};

export default UserId;
