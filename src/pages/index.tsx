import Head from 'next/head'

import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vitor Hugo Klein</title>
      </Head>

      <div className={styles.content}>
        <header>
          <h2>VitorK</h2>
          <div className="icons">
            <img src="/linkedin-icon.svg" alt="linkedin" />
            <img src="/insta-icon.svg" alt="insta" />
            <img src="/git-icon.svg" alt="git" />
          </div>
        </header>
      </div>
    </div>

  )
}
