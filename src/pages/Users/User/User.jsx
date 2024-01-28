import React from 'react'
import styles from './User.module.scss'
import { NavLink } from 'react-router-dom';
import userImage from '../../../assets/images/user.svg';

const User = ({user, usersOnFollowing, follow, unfollow}) => {
    return (
        // <div className={styles.user}>
        //     <div className={styles.user__wrapper}>
        //         <div>
        //             <img src={props.profPicUrl} alt="profPicUrl" />
        //             { props.followed ? <button onClick={props.unfollow(props.id)}>Unfollow</button> : <button onClick={props.follow(props.id)}>Follow</button> }
        //         </div>
        //         <div className={styles.user__content}>
        //             <span className={styles.user__fullname}>{props.fullName}</span>
        //             <span className={styles.user__location}>{props.location.country}, {props.location.city}</span>
        //             <span className={styles.user__status}>{props.status}</span>
        //         </div>
        //     </div>
        // </div>
        <div key={user.id} className={styles.user}>
                        <div className={styles.user__wrapper}>
                            <div>
                                <NavLink to={`/profile/${user.id}`}>
                                    <img src={user.photos.small != null ? user.photos.small : userImage} alt="profPicUrl" />
                                </NavLink>
                                {user.followed ? <button disabled={usersOnFollowing.some(id => id === user.id)} onClick={() => {
                                    unfollow(user.id);
                                }}>Unfollow</button> : <button disabled={usersOnFollowing.some(id => id === user.id)} onClick={() => {
                                    follow(user.id);
                                }}>Follow</button>}
                            </div>
                            <div className={styles.user__content}>
                                <span className={styles.user__name}>{user.name}</span>
                                <span className={styles.user__status}>{user.status}</span>
                            </div>
                        </div>
                    </div>
    )
}

export default User