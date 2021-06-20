import Head from 'next/head';

import RepoLink from '../components/RepoLink';
import Links from '../components/Links';
import Header from '../components/Header';
import Text from '../components/Text';
import Animation from '../components/Animation';

import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Vitor Hugo Klein</title>
        </Head>

        <div className={styles.content}>
          <Header />

          <div className={styles.background}>
            <img src="/background.png" alt="background" />
          </div>

          <Text
            title="Who am I?"
            content="I'm a new programmer, always studying to improve my JS/TS stack
            I'm looking for my 1st job in the programming area and I'm currently
            taking a technical course in IT
            I've done several NLW's and completed the last Omnistack Week
            held by Rocketseat, I follow my I study with Rocketseat's
            cutting-edge content and I'm currently on my way to completing
            the Bootcamp GoStack and that's it...."
          />

          <Animation
            title="My Top repositóries"
          />

          <RepoLink
            name="Be-The-Hero"
            date="MAR 28, 2020"
            url="https://github.com/Vitor-Klein/Be-The-Hero"
          />
          <RepoLink
            name="Podcastr"
            date="APR 24, 2021"
            url="https://github.com/Vitor-Klein/NLW-5-trilha-ReactJS"
          />
          <RepoLink
            name="Go-Barber"
            date="JUN 6, 2021"
            url="https://github.com/Vitor-Klein/GoBarber-BootcampGoStack"
          />


         <Text
          title="A little more about me"
          content="As I said, currently I do technical high school in computer science,
          where two of my specific subjects are, java programming language
          and web programming, which I leave all the codes of all the activities
          I do during the school year in these two repositories underneath "
         />

          <RepoLink
            name="Atv-Java"
            date="MAY 9, 2021"
            url="https://github.com/Vitor-Klein/3-info-Atv-Java"
          />
          <RepoLink
            name="Atv-Web"
            date="APR 8, 2021"
            url="https://github.com/Vitor-Klein/Atv-Web-Escola-3-ano"
          />

          <Links />
        </div>
      </div>
    </>

  )
}
