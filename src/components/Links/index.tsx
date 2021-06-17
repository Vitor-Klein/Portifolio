import React from 'react'

import styles from "./links.module.scss";

const Links: React.FC = () => {
  return (
    <>
      <div className={styles.link}>
            <h1>Links to contact-me</h1>
            <div className={styles.buttons}>
              <button style={{ backgroundColor: "var(--red)" }}>
                <img src="/gmail-icon.svg" alt="twitter" />
              </button>
              <button style={{ backgroundColor: "var(--blue)" }}>
                <img src="/twitter-icon.svg" alt="twitter" />
              </button>
              <button style={{ backgroundColor: "var(--purple)" }}>
                <img src="/rocket-icon.svg" alt="twitter" />
              </button>
            </div>
          </div>
    </>
  )
}

export default Links;
