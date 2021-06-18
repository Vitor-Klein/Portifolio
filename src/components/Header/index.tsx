import React from 'react'
import Link from 'next/link'

import styles from "./header.module.scss";

const Header: React.FC = () => {
  return (
    <>
      <div className={styles.header}>
        <header>
            <h2>VitorK</h2>
            <div className="icons">
              <Link href="https://www.linkedin.com/in/vitor-klein/">
                <img src="/linkedin-icon.svg" alt="linkedin"/>
              </Link>
              <Link href="https://www.instagram.com/vitor__klein/">
                <img src="/insta-icon.svg" alt="insta" />
              </Link>
              <Link href="https://github.com/Vitor-Klein">
                <img src="/git-icon.svg" alt="git" />
              </Link>
            </div>
          </header>
      </div>
    </>
  )
}

export default Header;
