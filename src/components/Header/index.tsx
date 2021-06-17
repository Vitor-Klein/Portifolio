import React from 'react'

import styles from "./header.module.scss";

const Header: React.FC = () => {
  return (
    <>
      <div className={styles.header}>
        <header>
            <h2>VitorK</h2>
            <div className="icons">
              <a href="https://www.linkedin.com/in/vitor-klein/">
                <img src="/linkedin-icon.svg" alt="linkedin"/>
              </a>
              <a href="https://www.instagram.com/vitor__klein/">
                <img src="/insta-icon.svg" alt="insta" />
              </a>
              <a href="https://github.com/Vitor-Klein">
                <img src="/git-icon.svg" alt="git" />
              </a>
            </div>
          </header>
      </div>
    </>
  )
}

export default Header;
