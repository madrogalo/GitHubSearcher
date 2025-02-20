import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IUserId } from "../intarfaces";
import CardRepo from "../components/CardRepo";
import { IRepos } from "../intarfaces";
import styles from "../styles/Page.module.scss";
import SearchPanel from "../components/SearchPanel";
import UserInfo from "../components/UserInfo";
import NoData from "../components/NoData";
import debounce from "lodash.debounce";
import { APIService } from "../utils/apiService";

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
    html_url: "",
  });

  const [repos, setRepos] = useState<Array<IRepos>>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [repoNames, setRepoNames] = useState<Array<string>>([]);

  useEffect(() => {
    if (name) {
      APIService.getUserByName(name).then((user) => setUser(user));
    }
  }, [name]);

  useEffect(() => {
    if (name) {
      if (searchInput.length > 0) {
        APIService.getUserRepo(name, searchInput)
          .then((repo) => {
            if (repo.message === "Not Found") {
              setRepos([]);
            } else {
              const arr = [repo];
              setRepos(arr);
            }
          })
          .catch((_err) => setRepos([]));
      } else {
        APIService.getUserAllRepos(name).then((repos) => setRepos(repos));
      }
    }
  }, [name, searchInput]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    const repoNamesArr = repos.map((item) => item.name);
    const repoNamesArrFiltered = repoNamesArr.filter((item) =>
      item.includes(e.target.value)
    );
    if (e.target.value === "") {
      setRepoNames([]);
    } else {
      setRepoNames(repoNamesArrFiltered);
    }
  };

  const setValueFromDropdown = (value: string) => {
    setSearchInput(value);
    setRepoNames([]);
  };

  const debounceHandleSearch = debounce(handleSearch, 500);

  return (
    <div className={styles.content}>
      <UserInfo user={user} />
      <SearchPanel
        handleSearch={debounceHandleSearch}
        placeholder={`Search for ${user.name}'s Repositories`}
        repoNames={repoNames}
        onClick={(value: string) => setValueFromDropdown(value)}
      />

      {repos.map((repo) => (
        <CardRepo
          key={repo.id}
          name={repo.name}
          forks={repo.forks}
          stargazers_count={repo.stargazers_count}
          html_url={repo.html_url}
        />
      ))}
      {!repos.length && <NoData />}
    </div>
  );
};

export default UserId;
