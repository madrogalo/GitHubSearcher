import type { NextPage } from 'next'
import Card from '../components/card'
import React, { useEffect, useState } from 'react'
import { IUsers } from '../intarfaces'
import SearchPanel from '../components/searchPanel'
import pagestyles from '../styles/Page.module.scss'
import NoData from '../components/noData'


const Home: NextPage = () => {
  const [users, setUsers] = useState<Array<IUsers>>([])
  const [searchInput, setSearchInput] = useState<string>('')

  useEffect(() => {
    if(searchInput.length > 0) {
      fetch(`https://api.github.com/users/${searchInput}`)
      .then(res => res.json())
      .then(user => {
        if(user.message) {
          setUsers([])
        } else {
          const arr = [user]
          setUsers(arr)
        }
      })
    } else {
      fetch('https://api.github.com/users')
      .then(res => res.json())
      .then(users => setUsers(users)
      )
    }
  },[searchInput])
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  }

  return (
    <div className={pagestyles.content}>
      <SearchPanel 
        handleSearch={handleSearch} 
        placeholder='Search for Users' 
      />
      {
        users.map(user => {
          return (
            <Card
              key={user.id}
              avatarUrl={user.avatar_url}
              login={user.login}
              url={user.url}
            />
          )
        })
      }
      {!users.length && <NoData />}
    </div>
  )
}

export default Home
