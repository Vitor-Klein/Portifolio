import Head from 'next/head'

import styles from "./home.module.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.texts}>
        <h1>Hello World</h1>
      </main>
    </div>

  )
}
