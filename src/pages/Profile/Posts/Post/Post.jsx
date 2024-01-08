import React from 'react';

import styles from './Post.module.scss'

const Post = (props) => {
  return (
    <div className={styles.post}>
      <div className={styles.post__body}>
        <img src="https://bigpicture.ru/wp-content/uploads/2022/06/bigpicture_ru_bez-nazvanija-2022-06-24t183807.456.jpg" alt="profile_pic" />
        {props.body}
      </div>
      <div className={styles.post__info}>
        Likes: {props.likesCount}
        <button>Like</button>
      </div>
    </div>
  )
}

export default Post