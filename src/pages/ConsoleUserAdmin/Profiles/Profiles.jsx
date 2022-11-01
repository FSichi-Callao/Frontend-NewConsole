import React, { useState } from 'react'
import { PageTitles } from '../../../components/PageSections';
import { ExportSectionForConsoleAdmin } from '../../../components/PageSections/ExportSection';
import { PaginationSection } from '../../../components/Pagination/PaginationSection';
import { TableForConsoleProfiles } from '../../../components/Table/TableForConsoleProfiles';
import { listOfProfiles } from './data';

export const Profiles = () => {

    /* STATES FOR THE DATA */

    const [totalElements, setTotalElements] = useState(20);
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(2);

    const onChangeCurrent = (value) => { setCurrent(value); }

    return (
        <section className='p-4'>

            <PageTitles title={'Administración de usuarios'} subtitle={'Configuración de perfil'} color={'text-red-600'} />

            <ExportSectionForConsoleAdmin buttonTitle={'Agregar Nuevo Perfil'} totalRecords={200} link={'/profile'} />

            <div className="mt-6">
                <div className="overflow-x-auto sm:-mx-4">
                    <div className="sm:px-4">
                        <TableForConsoleProfiles data={listOfProfiles} />
                    </div>
                </div>
            </div>

            <PaginationSection current={current} changeCurrent={onChangeCurrent} pageSize={pageSize} totalElements={totalElements} />

        </section>
    )
}