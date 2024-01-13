import React from 'react'
import styles from './Users.module.scss';
import userImage from '../../assets/images/user.svg';

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
                                <img src={u.photos.small != null ? u.photos.small : userImage} alt="profPicUrl" />
                                {u.followed ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button> : <button onClick={() => props.follow(u.id)}>Follow</button>}
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