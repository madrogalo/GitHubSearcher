import React, { useEffect } from 'react'
import styles from '../styles/Layout.module.scss'
import { LayoutProps } from '../intarfaces'

const Layout = ({children}: LayoutProps) => {

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, [])
  return (
    <div className={styles.container}>
      <h1>GitHub Searcher</h1>
      {children}
    </div>
  )
}

export default Layout
