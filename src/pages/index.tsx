import Head from 'next/head';

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

          <Text
            title="Eu Profissional"
            content="Sou um programador dedicado, sempre em busca de aprimorar 
            minhas habilidades na stack JS/TS. Possuo formação técnica em 
            informática pelo Colégio Estadual João Manuel Mondrone 
            de Medianeira, PR e já participei de diversas NLWs, incluindo a 
            última Semana Omnistack promovida pela Rocketseat. Busco sempre 
            me manter atualizado com os conteúdos de ponta da Rocketseat e de 
            outras fontes confiáveis. Fique à vontade para entrar em contato 
            ou me seguir nas redes sociais, cujos links estão disponíveis acima.
            Nunca paro de aprender e estou aberto a novas oportunidades de trabalho."
          />

          <Animation
            title="Meus Principais Repósitórios"
            url={repoAnimation}
            height={250}
            width={400}
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
            content="Como eu disse anteriormente, atualmente Possuo formação técnica em 
            informática pelo Colégio Estadual João Manuel Mondrone 
            de Medianeira, PR e agora estou em busca de começar minha vida academica 
            no curso de Ciencias da Computação da UTFPR em Medianeira.
            Logo abaixo estao os repósitorios de alguns projetos e atividades feitos
            no decorrer dos 4 anos de curso Tecnico que tive"
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
            content="Além de ser desenvolvedor, também estudo design, UI e UX. 
            Tenho conhecimentos em aplicações mobile e web, e gostaria de compartilhar 
            alguns dos meus projetos no Figma. Embora o design não seja minha 
            principal área de atuação, acredito que esses conhecimentos podem me 
            ajudar, principalmente no front-end.

            Minha paixão por tecnologia e design me levou a buscar mais conhecimento 
            em UI/UX, e hoje posso aplicar esses conhecimentos em meus projetos 
            de desenvolvimento. Acredito que o design é uma parte fundamental 
            no processo de criação de uma aplicação, e busco sempre aprimorar 
            minhas habilidades nessa área."
          />

          <FlatList />

          <Links />
        </div>
      </div>
    </>

  )
}
