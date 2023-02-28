import React from 'react'

import styles from "./header.module.scss";

const Header: React.FC = () => {
  return (
    <>
      <div className={styles.header}>
        <header>
          <h2>VitorK</h2>
          <div className={styles.devIconsContainer}>
            <div className={styles.devIcons}><br />
              <img alt="Rafa-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
              <img alt="Rafa-Ts" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg" />
              <img alt="Rafa-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" />
              <img alt="Rafa-React" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" />
              <img alt="Rafa-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
              <img alt="Rafa-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
              <img alt="Rafa-Next" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" />
            </div>
          </div>


          <div className={styles.icons}>

          </div>
        </header>
      </div>
    </>
  )
}

export default Header;
