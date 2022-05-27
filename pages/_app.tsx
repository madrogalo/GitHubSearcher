import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(users => setUsers(users)
    )
  },[])

  return (
    <Layout>
      <Component users={users} {...pageProps} />
    </Layout>
  ) 
}

export default MyApp
