import React from 'react'
import styles from './User.module.scss'

const User = (props) => {
    return (
        <div className={styles.user}>
            <div className={styles.user__wrapper}>
                <div>
                    <img src={props.profPicUrl} alt="profPicUrl" />
                    { props.followed ? <button onClick={props.unfollow(props.id)}>Unfollow</button> : <button onClick={props.follow(props.id)}>Follow</button> }
                </div>
                <div className={styles.user__content}>
                    <span className={styles.user__fullname}>{props.fullName}</span>
                    <span className={styles.user__location}>{props.location.country}, {props.location.city}</span>
                    <span className={styles.user__status}>{props.status}</span>
                </div>
            </div>
        </div>
    )
}

export default User