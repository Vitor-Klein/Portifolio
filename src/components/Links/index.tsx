import React from 'react'
import Link from 'next/link'

import styles from "./links.module.scss";

const Links: React.FC = () => {
  return (
    <>
      <div className={styles.link}>
        <h1>Links to contact-me</h1>
        <div className={styles.buttons}>
          <Link href="mailto:vitorhklein2@gmail.com">
            <button style={{ backgroundColor: "var(--red)" }}>
              <img src="/gmail-icon.svg" alt="twitter" />
            </button>
          </Link>

          <Link href="https://twitter.com/VitorHKlein">
            <button style={{ backgroundColor: "var(--blue)" }}>
              <img src="/twitter-icon.svg" alt="twitter" />
            </button>
          </Link>

          <Link href="https://app.rocketseat.com.br/me/vitor-klein">
            <button style={{ backgroundColor: "var(--purple)" }}>
              <img src="/rocket-icon.svg" alt="twitter" />
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Links;
