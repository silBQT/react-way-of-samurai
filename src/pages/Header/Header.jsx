import React from 'react';

import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <img src="https://logos-download.com/wp-content/uploads/2016/11/Tilda_logo_logotype.png" alt="logo" />
        <h1 className={styles.header__title}>Title</h1>
      </div>
      <div className="header__auth">
        { props.isAuth ? props.login : <NavLink to="/login">Login</NavLink> }
      </div>
    </header>
  )
}

export default Header