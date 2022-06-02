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
import debounce from 'lodash.debounce'
import {fetchAllUsersRepo, fetchUsersByName, fetchUsersByNameAndRepo} from "../utils"

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

  type fbn = {
    name: string | string[]
  }
  useEffect(() => {
    if (name) {
      fetchUsersByName(name)
        .then((user) => setUser(user));
    }
  }, [name]);

  useEffect(() => {
    if (name) {
      if(searchInput.length > 0) {
          fetchUsersByNameAndRepo(name, searchInput)
          .then((repo) => {
            if(repo.message === 'Not Found') {
              setRepos([])
            } else {
              const arr = [repo]
              setRepos(arr)
            }
          })
          .catch(_err => setRepos([]))
      } else {
        fetchAllUsersRepo(name)
          .then((repos) => setRepos(repos));
      }
    }
  }, [name, searchInput]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  }

  const debounceHandleSearch = debounce(handleSearch, 500)

  return (
    <div className={styles.content}>
      <UserInfo user={user} />
      <SearchPanel
        handleSearch={debounceHandleSearch}
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
