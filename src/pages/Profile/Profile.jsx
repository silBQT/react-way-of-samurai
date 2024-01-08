import React from 'react';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import Posts from './Posts/Posts';

import styles from './Profile.module.scss';

const Profile = (props) => {
  return (
    <div className={styles.profile}>
        <ProfileInfo />
        <Posts posts={props.state.posts} newPostBody={props.state.newPostBody} dispatch={props.dispatch} />
    </div>
  )
}

export default Profile