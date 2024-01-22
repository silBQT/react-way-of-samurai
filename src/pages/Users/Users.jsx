import React from 'react'
import styles from './Users.module.scss';
import userImage from '../../assets/images/user.svg';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) > 10 && 20;
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={styles.users}>

            <h2>Users</h2>
            <div className={styles.users__items}>
                {
                    props.users.map(u => <div key={u.id} className={styles.user}>
                        <div className={styles.user__wrapper}>
                            <div>
                                <NavLink to={`/profile/${u.id}`}>
                                    <img src={u.photos.small != null ? u.photos.small : userImage} alt="profPicUrl" />
                                </NavLink>
                                {u.followed ? <button disabled={props.usersOnFollowing.some(id => id === u.id)} onClick={() => {
                                    props.setUserOnFollowing(true, u.id)
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, { withCredentials: true, headers: { "API-KEY": "f3c011b4-54bd-4d5f-a293-6e99fc0327d9" } }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                        props.setUserOnFollowing(false, u.id)
                                    })
                                }}>Unfollow</button> : <button disabled={props.usersOnFollowing.some(id => id === u.id)} onClick={() => {
                                    props.setUserOnFollowing(true, u.id)
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, { withCredentials: true, headers: { "API-KEY": "f3c011b4-54bd-4d5f-a293-6e99fc0327d9" } }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                        props.setUserOnFollowing(false, u.id)
                                    })
                                }}>Follow</button>}
                            </div>
                            <div className={styles.user__content}>
                                <span className={styles.user__name}>{u.name}</span>
                                <span className={styles.user__status}>{u.status}</span>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
            <div className={styles.users__pages}>
                {
                    pages.map(p => {
                        return <span key={p} className={p === props.currentPage ? `${styles.users__page} ${styles.users__page_active}` : styles.users__page} onClick={() => {
                            props.onClickChangeCurrentPage(p);
                        }}>{p}</span>
                    })
                }
            </div>
        </div>
    )
}

export default Users