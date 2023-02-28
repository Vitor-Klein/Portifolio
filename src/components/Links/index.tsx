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

          <a href="https://www.linkedin.com/in/vitor-klein/" target="_blank">
            <div className={styles.margin}>
              <button>
                <img src="/linkedin-icon.svg" alt="linkedin" />
              </button>
            </div>
          </a>

          <a href="https://github.com/Vitor-Klein" target="_blank">
            <div className={styles.margin}>
              <button>
                <img src="/git-icon.svg" alt="git" />
              </button>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default Links;
