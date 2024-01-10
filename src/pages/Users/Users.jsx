import axios from 'axios';
import styles from './Users.module.scss';
import userImage from '../../assets/images/user.svg';
import React from 'react';

class Users extends React.Component {

    constructor(props) {
      super(props);

      axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items) // убрал this
          });
    }

    render() {
        return (
            <div className={styles.users}>
              <h2>Users</h2>
              <div className={styles.users__items}>
                {
                  this.props.users.map(u => <div key={u.id} className={styles.user}>
                    <div className={styles.user__wrapper}>
                      <div>
                        <img src={u.photos.small != null ? u.photos.small : userImage} alt="profPicUrl" />
                        {u.followed ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button> : <button onClick={() => this.props.follow(u.id)}>Follow</button>}
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
            </div>
        )
    }
}

export default Users;