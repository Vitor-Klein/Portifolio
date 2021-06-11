import Head from 'next/head'

import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vitor Hugo Klein</title>
      </Head>

      <main className={styles.texts}>
        <h1>Hello World</h1>
      </main>
    </div>

  )
}
