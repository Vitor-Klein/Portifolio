import Head from 'next/head';
import Lottie from 'react-lottie';
import animationData from '../assets/git-animation.json';

import Repositorio from '../components/Repositorio';

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

          <div className={styles.animation}>
            <Lottie
              options={defaultOptions}
              height={250}
              width={400}
              style={{ marginLeft: '-21px' }}
            />
            <h1>My Top repositóries</h1>
          </div>

          <Repositorio
            name="Be-The-Hero"
            date="MAR 28, 2020"
          />
          <Repositorio
            name="Podcastr"
            date="APR 24, 2021"
          />
          <Repositorio
            name="Go-Barber"
            date="JUN 6, 2021"
          />
        </div>
      </div>
    </>

  )
}
