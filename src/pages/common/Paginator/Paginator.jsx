import React from 'react'
import styles from './Paginator.module.scss';
import { Pagination } from '@mui/material'


const Paginator = ({totalItemsCount, pageSize, currentPage, onClickChangeCurrentPage}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    
    return (
        <div>
            {
                <Pagination count={pagesCount} onChange={(_, page) => onClickChangeCurrentPage(page)} />
            }
        </div>

    )
}

export default Paginator