import React from 'react'

import styles from "./links.module.scss";

const Links: React.FC = () => {
  return (
    <>
      <div className={styles.link}>
        <h1>Links Para Contato</h1>
        <div className={styles.buttons}>
          <a href="mailto:vitorhklein2@gmail.com" target="_blank">
            <div className={styles.margin}>
            <button>
              <img src="/gmail-icon.svg" alt="twitter" />
            </button>
            </div>
          </a>

          <a href="https://twitter.com/VitorHKlein" target="_blank">
          <div className={styles.margin}>
            <button>
              <img src="/twitter-icon.svg" alt="twitter" />
            </button>
            </div>
          </a>

          <a href="https://app.rocketseat.com.br/me/vitor-klein" target="_blank">
          <div className={styles.margin}>
            <button>
              <img src="/rocket-icon.svg" alt="twitter" />
            </button>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default Links;
