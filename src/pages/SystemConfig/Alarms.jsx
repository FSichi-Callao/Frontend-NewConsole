import React from 'react'
import { ExportSectionWithoutPageSize, PageTitles } from '../../components/PageSections'
import { TableForSystemConfig } from '../../components/Table/TableForSystemConfig'

export const Alarms = () => {
    return (
        <section className='p-4'>

            <PageTitles title={'Configuración del sistema'} subtitle={'Listado de alarmas'} color={'text-indigo-400'} />

            <ExportSectionWithoutPageSize />

            <TableForSystemConfig id={1} data={{}} />

        </section>
    )
}