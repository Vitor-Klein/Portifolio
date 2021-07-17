import React from 'react'
import Lottie from 'react-lottie';

import animationData from '../../assets/git-animation.json';

import styles from "./animation.module.scss";

interface AnimationProps {
  title: string;
}

const Animation: React.FC<AnimationProps> = ({ children, title = '', ...rest }) => {
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
      <div className={styles.animation}>
            <Lottie
              options={defaultOptions}
              height={250}
              width={400}
            />
            <h2>{title}</h2>
          </div>
    </>
  )
}

export default Animation;
