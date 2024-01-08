import React from 'react';

import styles from './Message.module.scss'

const Message = (props) => {
  return (
    <div className={styles.message}>
        <img src="https://koshka.top/uploads/posts/2021-12/1638931898_6-koshka-top-p-koshek-na-avatarku-6.jpg" alt="profPic" />
        {props.message}
    </div>
  )
}

export default Message