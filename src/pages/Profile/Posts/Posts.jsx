import React from 'react';

import styles from './Posts.module.scss';
import Post from './Post/Post';

const Posts = (props) => {

  let postElements = props.posts.map( p => <Post key={p.id} id={p.id} body={p.body} likesCount={p.likesCount} /> )
  let newPostBody = props.newPostBody;

  let onChangeNewPostBody = (e) => {
    const body = e.target.value;
    props.updateNewPostBody(body);
  };
  let onClickAddPost = () => {
    props.addPost();
  };

  return (
    <div className={styles.posts}>
        <h2>My posts</h2>
        <textarea onChange={onChangeNewPostBody} name="post_desc" placeholder='your news...' value={newPostBody}></textarea>
        <button onClick={onClickAddPost}>Add post</button>
        <div className={styles.posts__wrapper}>
          {postElements}
        </div>
    </div>
  )
}

export default Posts