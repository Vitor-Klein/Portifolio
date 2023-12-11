import React from 'react';
import { Carousel } from 'antd';
import styles from "./carrosel.module.scss";
const Carrosel: React.FC = () => {
  return (
    <Carousel
      autoplay
      autoplaySpeed={2000}
      dotPosition='left'
      className={styles.carouselContainer}>
      <div className={styles.contentImages}>
        <a href="https://www.figma.com/file/k6jo8vprf2OmUnd5rI1szv/Trash-It?node-id=1%3A8&t=XE4jwTTzHN1tpxdv-1" target="_blank">
          <img src="./trashit.png" alt="capa5" className={styles.imageStyle} />
        </a>
      </div>
      <div className={styles.imageContainer}>
        <a href="https://www.figma.com/file/qhmQDwV5Bl1Yk2k1iZruBe/Coffe-App?node-id=0%3A1&t=FQInWlAqVmWheQnk-1" target="_blank">
          <img src="./coffeapp.png" alt="capa" className={styles.imageStyle} />
        </a>
      </div>
      <div className={styles.imageContainer}>
        <a href="https://www.figma.com/file/qpSWXdBzOoY990GbVXa94m/Bonsify?node-id=0%3A1" target="_blank">
          <img src="./bonsify.png" alt="capa2" className={styles.imageStyle} />
        </a>
      </div>
      <div className={styles.imageContainer}>
        <a href="https://www.figma.com/file/ioe8Aaznk25tBwYXHqPQz5/GamePlay-NLW-Together-Copy?node-id=58913%3A83" target="_blank">
          <img src="./gameplay.png" alt="capa3" className={styles.imageStyle} />
        </a>
      </div>
      <div className={styles.imageContainer}>
        <a href="https://www.figma.com/file/lwRZJUmOVEvCXqOHzWHriM/DrinkIt?node-id=8%3A67&t=UXO4bzCVaHeyAgbx-1" target="_blank">
          <img src="./drinkit.png" alt="capa4" className={styles.imageStyle} />
        </a>
      </div>

    </Carousel>
  )

};

export default Carrosel;