import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Image from "next/image";
import styles from '../styles/usetid.module.scss'
import { IUserId } from '../intarfaces'
import CardRepo from '../components/cardRepo'
import { IRepos } from "../intarfaces"


const UserId: NextPage = () => {
  const router = useRouter()
  const { name } = router.query
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
    public_repos: 0
  })

  const [repos, setRepos] = useState<Array<IRepos>>([])

  useEffect(() => {
    if(name) {
      fetch(`https://api.github.com/users/${name}`)
      .then(res => res.json())
      .then(user => setUser(user))
    }
  },[name])

  useEffect(() => {
    if(name) {
      fetch(`https://api.github.com/users/${name}/repos`)
      .then(res => res.json())
      .then(repos => setRepos(repos))
    }
  },[name])


  return (
    <div>
      <div className={styles.userInfo}>
        <div className={styles.leftUserInfo}>
          <div className={styles.userImage}>
            {
              user.avatar_url && <Image src={user.avatar_url} width={200} height={200} alt={user.name}/>
            }
          </div>
        </div>
        <div className={styles.rightUserInfo}>
          <div className={styles.infoText}>
            <div>Name: <span>{user.name}</span></div>
            <div>Email: <span>{user.email}</span></div>
            <div>Location: <span>{user.location}</span></div>
            <div>Join Date: <span>{user.created_at}</span></div>
            <div>Followers: <span>{user.followers}</span></div>
            <div>Following: <span>{user.following}</span></div>
            <div>Bio: {user.bio}</div>
          </div>
        </div>
      </div>

      {
        repos.map(repo => 
          <CardRepo
            key={repo.id}
            name={repo.name}
            forks={repo.forks}
            stargazers_count={repo.stargazers_count}
          />
        )
      }
  
    </div>
  )

}

export default UserId
