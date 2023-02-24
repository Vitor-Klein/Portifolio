import React from 'react'

import styles from "./flatList.module.scss";


const FlatList: React.FC = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.wrapper_child}>
          <div className={styles.tab}>
            <a href="https://www.figma.com/file/k6jo8vprf2OmUnd5rI1szv/Trash-It?node-id=1%3A8&t=XE4jwTTzHN1tpxdv-1" target="_blank">
              <img src="./trashit.png" alt="capa5" />
            </a>
          </div>
          <div className={styles.tab}>
            <a href="https://www.figma.com/file/qhmQDwV5Bl1Yk2k1iZruBe/Coffe-App?node-id=0%3A1&t=FQInWlAqVmWheQnk-1" target="_blank">
              <img src="./coffeapp.png" alt="capa" />
            </a>

          </div>
          <div className={styles.tab}>
            <a href="https://www.figma.com/file/qpSWXdBzOoY990GbVXa94m/Bonsify?node-id=0%3A1" target="_blank">
              <img src="./bonsify.png" alt="capa2" />
            </a>
          </div>
          <div className={styles.tab}>
            <a href="https://www.figma.com/file/ioe8Aaznk25tBwYXHqPQz5/GamePlay-NLW-Together-Copy?node-id=58913%3A83" target="_blank">
              <img src="./gameplay.png" alt="capa3" />
            </a>
          </div>
          <div className={styles.tab}>
            <a href="https://www.figma.com/file/lwRZJUmOVEvCXqOHzWHriM/DrinkIt?node-id=8%3A67&t=UXO4bzCVaHeyAgbx-1" target="_blank">
              <img src="./drinkit.png" alt="capa4" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default FlatList;
