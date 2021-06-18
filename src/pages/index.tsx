import Head from 'next/head';
import Lottie from 'react-lottie';
import animationData from '../assets/git-animation.json';

import RepoLink from '../components/RepoLink';
import Links from '../components/Links';
import Header from '../components/Header';

import styles from "../styles/home.module.scss";

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    renderSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
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

          <div className={styles.texts}>
            <h1>Who am I?</h1>
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

          <div className={styles.animation}>
            <Lottie
              options={defaultOptions}
              height={250}
              width={400}
              style={{ marginLeft: '-21px' }}
            />
            <h1>My Top repositóries</h1>
          </div>

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


          <div className={styles.texts}>
          <h1>A little more about me</h1>

            <h2>
            As I said, currently I do technical high school in computer science, <br />
            where two of my specific subjects are, java programming language <br />
            and web programming, which I leave all the codes of all the activities <br />
            I do during the school year in these two repositories underneath <br />
            </h2>
          </div>

          <RepoLink
            name="3º info Atv-Java"
            date="MAY 9, 2021"
            url="https://github.com/Vitor-Klein/3-info-Atv-Java"
          />
          <RepoLink
            name="3º info Atv-Web"
            date="APR 8, 2021"
            url="https://github.com/Vitor-Klein/Atv-Web-Escola-3-ano"
          />

          <Links />
        </div>
      </div>
    </>

  )
}
