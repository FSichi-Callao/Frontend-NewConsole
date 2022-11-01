import React, { useState } from 'react'
import { PageTitles } from '../../../components/PageSections'
import { ExportSectionForConsoleAdmin } from '../../../components/PageSections/ExportSection';
import { PaginationSection } from '../../../components/Pagination/PaginationSection';
import { TableForConsoleUsers } from '../../../components/Table/TableForConsoleUsers';
import { dataConsoleUsersList } from './data';

export const Users = () => {

    /* STATES FOR THE DATA */

    const [totalElements, setTotalElements] = useState(20);
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(2);

    const onChangeCurrent = (value) => { setCurrent(value); }

    return (
        <section className='p-4'>

            <PageTitles title={'Administración de usuarios'} subtitle={'Gestión de usuarios'} color={'text-red-600'} />

            <ExportSectionForConsoleAdmin buttonTitle={'Agregar Nuevo Usuario'} totalRecords={200} link={'/user'} />

            <div className="mt-6">
                <div className="overflow-x-auto sm:-mx-4">
                    <div className="sm:px-4">
                        <TableForConsoleUsers data={dataConsoleUsersList} />
                    </div>
                </div>
            </div>

            <PaginationSection current={current} changeCurrent={onChangeCurrent} pageSize={pageSize} totalElements={totalElements} />

        </section>
    )
}