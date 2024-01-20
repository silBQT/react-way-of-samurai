import React from 'react'

import styles from './ProfileInfo.module.scss'
import Preloader from '../../common/Preloader/Preloader'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div className={styles.profile_info}>
        <img className={styles.profile_info__banner} src="https://pixelbox.ru/wp-content/uploads/2021/10/banner-twitch-anime-pixelbox.ru-10-scaled.jpg" alt="profile_banner"/>
        <div className={styles.profile_info__wrapper}>
          <img src={props.profile.photos.large} alt="profile_pic" className={styles.profile_info__pic} />
          <div className={styles.profile_info__content}>
            <span className={styles.profile_info__name}>Bakyt E.</span>
            Date of Birth:  6 november <br />
            City: Moscow <br />
            Education: BSU'11 <br />
            Website: localhost:3000 <br />
          </div>
        </div>
    </div>
  )
}

export default ProfileInfo;