import React from 'react';

import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import userImage from '../../assets/images/user.svg'
import Preloader from '../common/Preloader/Preloader'

const Header = (props) => {

  let loginElement = () => {
    if (!props.isAuth) {
      return <NavLink to="/login">Login</NavLink>
    }
    if (!props.profile) {
      return <Preloader />
    }
    if (!props.profile.photos.large) {
      return <div>{props.login}<img src={userImage} alt="userProfPic"/></div>
    }
    return <div>{props.login}<img src={props.profile.photos.large} alt="userProfPic"/></div>
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <img src="https://logos-download.com/wp-content/uploads/2016/11/Tilda_logo_logotype.png" alt="logo" />
        <h1 className={styles.header__title}>Title</h1>
      </div>
      <div className={styles.header__auth}>
        {
          loginElement()
        }
      </div>
    </header>
  )
}

export default Header