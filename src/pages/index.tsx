import Head from 'next/head';
import Lottie from 'react-lottie';

import RepoLink from '../components/RepoLink';
import Links from '../components/Links';
import Header from '../components/Header';
import Text from '../components/Text';
import Animation from '../components/Animation';
import FlatList from '../components/flatList';

import animationData from '../assets/dev.json';

import styles from "../styles/home.module.scss";

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  }
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Vitor Hugo Klein</title>
        </Head>

        <div className={styles.content}>
          <Header />

          <div className={styles.background}>
            <div className={styles.imageContainer}>
              <div className={styles.avatar}>
                <img src="https://github.com/Vitor-Klein.png" alt="avatar" />
                <h2>Olá me chamo Vitor Klein e sou um Desenvolvedor</h2>
              </div>
              <div className={styles.imageDev}>
                <Lottie
                  options={defaultOptions}
                  isClickToPauseDisabled={true}
                  height={600}
                  width={600}
                  style={{ marginTop: '-35px' }}
                />
              </div>
            </div>
          </div>

          <Text
            title="Eu Profissional"
            content="Sou um programador novo do interior do Paraná, estudando sempre para me aperfeiçoar
            na stack JS/TS, estou em busca do meu 1ºemprego na area de programação
            e atualmente faço curso tecnico em TI,ja fiz diversas NLW's e completei
            a ultima Semana Omnistack realizada pela Rocketseat, sigo meus estudos
            com os conteudos ponta de linha da Rocketseat e atualmente estou no
            caminho para completar o Bootcamp GoStack e é isso...."
          />

          <Animation
            title="Meus Principais Repósitórios"
          />

          <RepoLink
            name="Gameplay"
            date="JUN 22, 2021"
            url="https://github.com/Vitor-Klein/NLW-6-Trilha-ReactNative"
          />

          <RepoLink
            name="Podcastr"
            date="APR 24, 2021"
            url="https://github.com/Vitor-Klein/NLW-5-trilha-ReactJS"
          />

          <RepoLink
            name="Be-The-Hero"
            date="MAR 28, 2020"
            url="https://github.com/Vitor-Klein/Be-The-Hero"
          />

          <Text
            title="Eu Estudante"
            content="Como eu disse anteriormente, atualmente eu faço ensino medio
          tecnico em informática, curso técnico esse que possui matérias especializadas
          em programação web com HTML,CSS e JS, quanto uma matéria focada em programação
          orientada a objetos onde utilizamos Java, criei esses dois repositórios abaixo
          onde deixo todas as atividades realizadas em todos os trimestres durante o
          meu 3º ano. "
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

          <Text
            title="UI/UX"
            content="Alem de dev, tambem estudo um pouco de design,UI e UX
            vou deixar abaixo alguns dos meus projetos no figma, tanto de aplicações
            mobile quanto aplicações web, design nao é meu foco principal, mas tenho
            alguns conhecimentos na area que me ajudam, principalmente no front-end."
          />

          <FlatList />

          <Links />
        </div>
      </div>
    </>

  )
}
