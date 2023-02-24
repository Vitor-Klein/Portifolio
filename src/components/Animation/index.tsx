import React from 'react'
import Lottie from 'react-lottie';

import animationData from '../../assets/git-animation.json';

import styles from "./animation.module.scss";

interface AnimationProps {
  title?: string;
  url: any;
  height: any;
  width: any;
}

const Animation: React.FC<AnimationProps> = ({ children, title = '', url = '', height = '', width = '', ...rest }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: url,
    renderSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <>
      <div className={styles.animation}>
        <Lottie
          options={defaultOptions}
          height={height}
          width={width}
        />
        <h2>{title}</h2>
      </div>
    </>
  )
}

export default Animation;
