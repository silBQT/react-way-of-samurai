import React from 'react'
import styles from './Paginator.module.scss';


const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) > 10 && 20;
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            {
                pages.map(p => {
                    return <span key={p} className={p === props.currentPage ? `${styles.page} ${styles.page_active}` : styles.page} onClick={() => {
                        props.onClickChangeCurrentPage(p);
                    }}>{p}</span>
                })
            }
        </div>

    )
}

export default Paginator