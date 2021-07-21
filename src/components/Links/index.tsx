import React from 'react'
import Link from 'next/link'

import styles from "./links.module.scss";

const Links: React.FC = () => {
  return (
    <>
      <div className={styles.link}>
        <h1>Links Para Contato</h1>
        <div className={styles.buttons}>
          <Link href="mailto:vitorhklein2@gmail.com">
            <div className={styles.margin}>
            <button>
              <img src="/gmail-icon.svg" alt="twitter" />
            </button>
            </div>
          </Link>

          <Link href="https://twitter.com/VitorHKlein">
          <div className={styles.margin}>
            <button>
              <img src="/twitter-icon.svg" alt="twitter" />
            </button>
            </div>
          </Link>

          <Link href="https://app.rocketseat.com.br/me/vitor-klein">
          <div className={styles.margin}>
            <button>
              <img src="/rocket-icon.svg" alt="twitter" />
            </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Links;
