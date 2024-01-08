import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Nav.module.scss';

const setActive = ({isActive}) => isActive ? `${styles.nav__link} ${styles.nav__link_active}` : styles.nav__link; 

const Nav = () => {
  
  return (
    <nav className={styles.nav}>
      <ul>
        <li><NavLink to="/" className={setActive}>Profile</NavLink></li>
        <li><NavLink to="/dialogs" className={setActive}>Dialogs</NavLink></li>
        <li><NavLink to="/news" className={setActive}>News</NavLink></li>
        <li><NavLink to="/music" className={setActive}>Music</NavLink></li>
        <li><NavLink to="/settings" className={setActive}>Settings</NavLink></li>
      </ul>
    </nav>
  )
}

export default Nav