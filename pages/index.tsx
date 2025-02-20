import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { debounce } from "../utils/debounce";
import { IUsers } from "../intarfaces";
import { APIService } from "../utils/apiService";
import Card from "../components/Card";
import SearchPanel from "../components/SearchPanel";
import pagestyles from "../styles/Page.module.scss";
import NoData from "../components/NoData";

const Home: NextPage = (props) => {
  const { users: propsUsers }: any = props;
  const [users, setUsers] = useState<Array<IUsers>>(propsUsers);
  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    if (searchInput.length > 0) {
      APIService.getUserByName(searchInput).then((user) => {
        if (!user) {
          setUsers([]);
        } else {
          const arr = [user];
          setUsers(arr);
        }
      });
    } else {
      setUsers(propsUsers);
    }
  }, [propsUsers, searchInput]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const debounceHandleSearch = debounce(handleSearch, 500);

  return (
    <div className={pagestyles.content}>
      <SearchPanel
        handleSearch={debounceHandleSearch}
        placeholder="Search for Users"
      />
      {users.length ? (
        users.map((user) => {
          return (
            <Card
              key={user.id}
              avatarUrl={user.avatar_url}
              login={user.login}
              html_url={user.html_url}
            />
          );
        })
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default Home;
