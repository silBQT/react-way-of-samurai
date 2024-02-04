import React from 'react'
import styles from './Users.module.scss';
import Paginator from '../common/Paginator/Paginator';
import User from './User/User';

const Users = (props) => {
    return (
        <div className={styles.users}>

            <h2>Users</h2>
            <div className={styles.users__items}>
                {
                    props.users.map(u => <User key={u.id} user={u} usersOnFollowing={props.usersOnFollowing} follow={props.follow} unfollow={props.unfollow}/>)
                }
            </div>
            <div className={styles.users__pages}>
                <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} onClickChangeCurrentPage={props.onClickChangeCurrentPage}/>
            </div>
        </div>
    )
}

export default Users