import React from 'react';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="https://logos-download.com/wp-content/uploads/2016/11/Tilda_logo_logotype.png" alt="logo" />
      <h1 className={styles.header__title}>Title</h1>
    </header>
  )
}

export default Header