import React from 'react'

import styles from "./flatList.module.scss";


const FlatList: React.FC = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.wrapper_child}>
          <div className={styles.tab}>
            <a href="https://www.figma.com/file/wq4Qv91SdpVInGBybCNga6/DevCast?node-id=160%3A2761" target="_blank">
              <img src="./capa.png" alt="capa" />
            </a>

          </div>
          <div className={styles.tab}>
            <a href="https://www.figma.com/file/qpSWXdBzOoY990GbVXa94m/Bonsify?node-id=0%3A1" target="_blank">
              <img src="./capa2.png" alt="capa2" />
            </a>
          </div>
          <div className={styles.tab}>
            <a href="https://www.figma.com/file/ioe8Aaznk25tBwYXHqPQz5/GamePlay-NLW-Together-Copy?node-id=58913%3A83" target="_blank">
              <img src="./capa3.png" alt="capa3" />
            </a>
          </div>
          <div className={styles.tab}>
            <a href="https://www.figma.com/file/eYulMuG4kFlkcalFJm7eFz/Be-The-Hero-OmniStack-11-Copy?node-id=0%3A1" target="_blank">
              <img src="./capa4.png" alt="capa4" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default FlatList;
