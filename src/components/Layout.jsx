import React from 'react';
import Header from './../pages/Header/Header';
import Nav from './../pages/Nav/Nav';
import { Outlet } from 'react-router-dom';

import styles from './Layout.module.scss';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <Nav />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
};

export { Layout };