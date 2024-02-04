import React from 'react';

import styles from './Posts.module.scss';
import Post from './Post/Post';
import AddPostFormRedux from './AddPostForm/AddPostFormRedux';

const Posts = React.memo((props) => {

  let postElements = props.posts.map(p => <Post key={p.id} id={p.id} body={p.body} likesCount={p.likesCount} />)

  const addNewPost = (formData) => {
    props.addPost(formData.newPostBody);
  }

  return (
    <div className={styles.posts}>
      <h2>My posts</h2>
      <AddPostFormRedux onSubmit={addNewPost}/>
      <div className={styles.posts__wrapper}>
        {postElements}
      </div>
    </div>
  )
})

export default Posts