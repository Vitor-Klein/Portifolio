import React from 'react'

import styles from "./text.module.scss";

interface TextProps {
  title: string;
  content: string;
}

const Text: React.FC<TextProps> = ({ children, title = '', content = '', ...rest }) => {
  return (
    <>
      <div className={styles.texts}>
            <h1>{title}</h1>
            <h2>{content}</h2>
          </div>
    </>
  )
}

export default Text;
