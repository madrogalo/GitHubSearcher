import type { NextPage } from 'next'
import Card from '../components/card'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import { IUsers } from '../intarfaces'


const Home: NextPage = () => {
  const [users, setUsers] = useState<Array<IUsers>>([])

  useEffect(() => {
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(users => setUsers(users)
    )
  },[])

  return (
    <div className={styles.container}>
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
    </div>
  )
}

export default Home
