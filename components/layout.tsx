import React from 'react'
import styles from '../styles/Layout.module.scss'
import { LayoutProps } from '../intarfaces'

const Layout = ({children}: LayoutProps) => {
  return (
    <div className={styles.container}>
      <h1>GitHub Searcher</h1>
      {children}
    </div>
  )
}

export default Layout
