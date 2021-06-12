import Head from 'next/head'

import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <>
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

          <div className={styles.background}>
            <img src="/background.png" alt="background" />
          </div>

          <div className={styles.texts}>
            <h2>
              I'm a new programmer, always studying to improve my JS/TS stack <br /> <br />
              I'm looking for my 1st job in the programming area and I'm currently <br />
              taking a technical course in IT <br /> <br />
              I've done several NLW's and completed the last Omnistack Week <br />
              held by Rocketseat, I follow my I study with Rocketseat's <br />
              cutting-edge content and I'm currently on my way to completing <br />
              the Bootcamp GoStack and that's it.... <br />
            </h2>
          </div>
        </div>
      </div>
    </>

  )
}
