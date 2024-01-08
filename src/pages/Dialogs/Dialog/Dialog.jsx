import React from 'react';

import styles from './Dialog.module.scss'
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
  const path = `/dialogs/${props.id}`;

  return (
    <div className={styles.dialog}>
      <NavLink to={path} className={styles.dialog__item}>
        <div className={styles.dialog__wrapper}>
          <img src={props.profPic} alt="avatarka" />
          {props.name}
        </div>
      </NavLink>
    </div>
  )
}

export default Dialog