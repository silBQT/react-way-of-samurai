import React from 'react';

import ProfileInfo from './ProfileInfo/ProfileInfo';

import styles from './Profile.module.scss';
import PostsContainer from './Posts/PostsContainer';

const Profile = (props) => {
  return (
    <div className={styles.profile}>
        <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} />
        <PostsContainer />
    </div>
  )
}
export default Profile