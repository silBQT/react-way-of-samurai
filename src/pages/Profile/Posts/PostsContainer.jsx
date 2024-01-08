import React from 'react';

import { addPostActionCreator, updateNewPostBodyActionCreator } from '../../../redux/profile-reducer';
import Posts from './Posts';

const PostsContainer = (props) => {

  let state = props.store.getState();

  const updateNewPostBody = (body) => {
    let action = updateNewPostBodyActionCreator(body);
    props.store.dispatch(action);
  };

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  return (<Posts updateNewPostBody={updateNewPostBody} addPost={addPost} posts={state.profilePage.posts} newPostBody={state.profilePage.newPostBody}/>);
}

export default PostsContainer