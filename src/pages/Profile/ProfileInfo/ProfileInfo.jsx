import React from 'react'

import styles from './ProfileInfo.module.scss'
import Preloader from '../../common/Preloader/Preloader'
import userImage from '../../../assets/images/user.svg'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
  const onChangeUserImage = (e) => {
    if (e.target.files.length) {
      props.saveUserImage(e.target.files[0])
    }
  }

  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div className={styles.profile_info}>
      <img className={styles.profile_info__banner} src="https://pixelbox.ru/wp-content/uploads/2021/10/banner-twitch-anime-pixelbox.ru-10-scaled.jpg" alt="profile_banner" />
      <div className={styles.profile_info__wrapper}>
        <div className={styles.profile_info__pic}>
          <img src={props.profile.photos.large || userImage} alt="profile_pic" />
          {props.isOwner && <input type='file' onChange={onChangeUserImage} />}
        </div>

        <div className={styles.profile_info__content}>
          <span className={styles.profile_info__name}>{props.profile.fullName}</span>
          <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />
          {props.profile.aboutMe != null && `О себе: ${props.profile.aboutMe}`} <br />
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;