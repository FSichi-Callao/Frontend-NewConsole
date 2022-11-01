import React from 'react'
import { ExportSectionWithoutPageSize, PageTitles } from '../../components/PageSections'
import { TableForSystemConfig } from '../../components/Table/TableForSystemConfig'
import { operationsData } from './data'

export const Operations = () => {
    return (
        <section className='p-4'>

            <PageTitles title={'Configuración del sistema'} subtitle={'Listado de Operaciones'} color={'text-indigo-400'} />

            <ExportSectionWithoutPageSize />

            <TableForSystemConfig id={3} data={operationsData} />

        </section>
    )
}