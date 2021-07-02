import Link from 'next/link';
import React, { ButtonHTMLAttributes } from 'react'

import styles from "./repositorio.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  url?: string;
  name: string;
  date: string;
}

const RepoLink: React.FC<ButtonProps> = ({ children, url = '', name = '', date = '', ...rest }) => {
  return (
    <div className={styles.container}>
      <Link href={url}>
        <button className={styles.repo} onClick={() => { }}>
          <div className={styles.repoTexts}>
            <h1>{name}</h1>
            <h2>{date}</h2>
          </div>
          <hr />
        </button>
      </Link>
    </div>
  )
}

export default RepoLink;
