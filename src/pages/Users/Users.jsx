import User from './User/User';
import styles from './Users.module.scss';

const Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers([
      { id: 1, profPicUrl: 'https://i.pinimg.com/originals/5f/19/2b/5f192b7f4d360fe100d794064c3c0012.jpg', fullName: 'Dmitry', status: 'some status', location: { country: 'Belarus', city: 'Minsk' }, followed: true },
      { id: 2, profPicUrl: 'https://i.pinimg.com/originals/48/61/f8/4861f8e7801d7dcba8142b274646de78.jpg', fullName: 'Maksim', status: 'I am a boss', location: { country: 'Russia', city: 'Moscow' }, followed: true },
      { id: 3, profPicUrl: 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666264296_8-mykaleidoscope-ru-p-kartinki-s-koshechkami-krasivo-12.jpg', fullName: 'Kirill', status: 'I am a boss too', location: { country: 'Russia', city: 'Moscow' }, followed: false },
    ])
  }

  return (
    <div className={styles.users}>
      <h2>Users</h2>
      <div className={styles.users__items}>
        {
          props.users.map(u => <div key={u.id} className={styles.user}>
            <div className={styles.user__wrapper}>
              <div>
                <img src={u.profPicUrl} alt="profPicUrl" />
                {u.followed ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button> : <button onClick={() => props.follow(u.id)}>Follow</button>}
              </div>
              <div className={styles.user__content}>
                <span className={styles.user__fullname}>{u.fullName}</span>
                <span className={styles.user__location}>{u.location.country}, {u.location.city}</span>
                <span className={styles.user__status}>{u.status}</span>
              </div>
            </div>
          </div>
          )

          //   props.users.map(u => <div key={u.id}>
          //     <span>
          //         <div>
          //             <img src={u.photoUrl} className={styles.userPhoto}/>
          //         </div>
          //         <div>
          //             {u.followed
          //                 ? <button onClick={() => {
          //                     props.unfollow(u.id)
          //                 }}>Unfollow</button>
          //                 : <button onClick={() => {
          //                     props.follow(u.id)
          //                 }}>Follow</button>}

          //         </div>
          //     </span>
          //     <span>
          //         <span>
          //             <div>{u.fullName}</div>
          //             <div>{u.status}</div>
          //         </span>
          //         <span>
          //             <div>{u.location.country}</div>
          //             <div>{u.location.city}</div>
          //         </span>
          //     </span>
          // </div>)
        }
      </div>
    </div>
  )
}

export default Users