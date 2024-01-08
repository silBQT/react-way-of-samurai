import React from 'react';

import styles from './Posts.module.scss';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostBodyActionCreator } from '../../../redux/profile-reducer';

const Posts = (props) => {

  const postElements = props.posts.map( p => <Post id={p.id} body={p.body} likesCount={p.likesCount} /> )

  const onChangeNewPostBody = (e) => {
    const body = e.target.value;
    props.dispatch(updateNewPostBodyActionCreator(body));
  };

  const onClickAddPost = () => {
    props.dispatch(addPostActionCreator());
  };

  return (
    <div className={styles.posts}>
        <h2>My posts</h2>
        <textarea onChange={onChangeNewPostBody} name="post_desc" placeholder='your news...' value={props.newPostBody}></textarea>
        <button onClick={onClickAddPost}>Add post</button>
        <div className={styles.posts__wrapper}>
          {postElements}
        </div>
    </div>
  )
}

export default Posts