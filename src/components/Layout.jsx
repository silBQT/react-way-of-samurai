import React from 'react';
import Nav from './../pages/Nav/Nav';
import { Outlet } from 'react-router-dom';

import styles from './Layout.module.scss';
import HeaderContainer from '../pages/Header/HeaderContainer';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <HeaderContainer />
      <Nav />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
};

export { Layout };