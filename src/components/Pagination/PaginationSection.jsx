import React from 'react'
import Pagination from 'rc-pagination';
import './paginationStyles.css'

export const PaginationSection = ({ current, pageSize, totalElements, changeCurrent }) => {
    return (
        <Pagination
            current={current} pageSize={pageSize} total={totalElements} locale={'en_US'}
            onChange={(value) => { changeCurrent(value); }}
            style={{ margin: "50px", display: 'flex', justifyContent: 'center' }}
        />
    )
}
