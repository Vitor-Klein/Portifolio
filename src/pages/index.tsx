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

import { Client } from "get-pinned-repos";

export default function Home() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_GIT_API_KEY;
    if (token) {
      Client.setToken(token);
      getRepos();
    } else {
      console.error('Token não encontrado');
    }
  }, []);

  async function getRepos() {
    try {
      const pinned = await Client.getPinnedRepos("Vitor-Klein");
      setRepos(pinned);
    } catch (error) {
      console.error('Erro ao buscar repositórios:', error);
    }
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
          <div className={styles.repoGrid}>
            {repos.map(repo => (
              <RepoLink
                name={repo.name}
                date={repo.description}
                url={repo.url}
                image="./cover.svg"
              />
            ))}
            {/* 

            <RepoLink
              name="Drink-It"
              date="MAY 14, 2022"
              url="https://github.com/Vitor-Klein/Drink-It"
              image="./cover.svg"
            />

            <RepoLink
              name="Gameplay"
              date="JUN 22, 2021"
              url="https://github.com/Vitor-Klein/NLW-6-Trilha-ReactNative"
              image="./cover.svg"
            />

            <RepoLink
              name="TCC-TRASHIT-WEB"
              date="JUN 21, 2022"
              url="https://github.com/Vitor-Klein/TCC-TRASHIT-WEB"
              image="./cover.svg"
            /> */}
          </div>
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
