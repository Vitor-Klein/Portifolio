import Head from 'next/head';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import RepoLink from '../components/RepoLink';
import Links from '../components/Links';
import Header from '../components/Header';
import Text from '../components/Text';
import Animation from '../components/Animation';
import FlatList from '../components/flatList';

import styles from "../styles/home.module.scss";
import repoAnimation from '../assets/git-animation.json';
import devAnimation from '../assets/development.json';

export default function Home() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/users/Vitor-Klein/repos')
      .then(response => {
        setRepos(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


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
                <Animation
                  url={devAnimation}
                  height={600}
                  width={600}
                />
              </div>
            </div>
          </div>

          <div className={styles.myImageContainer}>
            <h1>Eu pessoal</h1>
            <div className={styles.myImageContent}>
              <img src="./imageUnsplash.png" alt="image" />
              <h2>Sou um programador dedicado, sempre em busca de aprimorar
                minhas habilidades na stack JS/TS. Possuo formação técnica em
                informática pelo Colégio Estadual João Manuel Mondrone
                de Medianeira, PR e já participei de diversas NLWs, incluindo a
                última Semana Omnistack promovida pela Rocketseat. Busco sempre
                me manter atualizado com os conteúdos de ponta da Rocketseat e de
                outras fontes confiáveis. Fique à vontade para entrar em contato
                ou me seguir nas redes sociais.
                Nunca paro de aprender e estou aberto a novas oportunidades de trabalho.</h2>
            </div>
          </div>

          <Animation
            title="Meus Principais Repósitórios"
            url={repoAnimation}
            height={250}
            width={400}
          />

          <RepoLink
            name="Trash-It"
            date="NOV 23, 2022"
            url="https://github.com/Vitor-Klein/TCC-TRASHIT-WEB"
          />

          <RepoLink
            name="Drink-It"
            date="MAY 14, 2022"
            url="https://github.com/Vitor-Klein/Drink-It"
          />

          <RepoLink
            name="Gameplay"
            date="JUN 22, 2021"
            url="https://github.com/Vitor-Klein/NLW-6-Trilha-ReactNative"
          />

          <Text
            title="UI/UX"
            content="Além de ser desenvolvedor, também estudo design, UI e UX. 
            Tenho conhecimentos em aplicações mobile e web, e gostaria de compartilhar 
            alguns dos meus projetos no Figma. Embora o design não seja minha 
            principal área de atuação, acredito que esses conhecimentos podem me 
            ajudar, principalmente no front-end."
          />

          <FlatList />

          <Links />
        </div>
      </div>
    </>

  )
}
