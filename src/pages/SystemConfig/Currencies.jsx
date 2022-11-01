import React from 'react'
import { ExportSectionWithoutPageSize, PageTitles } from '../../components/PageSections'
import { TableForSystemConfig } from '../../components/Table/TableForSystemConfig'
import { currenciesData } from './data'

export const Currencies = () => {
    return (
        <section className='p-4'>

            <PageTitles title={'Configuración del sistema'} subtitle={'Listado de monedas'} color={'text-indigo-400'} />

            <ExportSectionWithoutPageSize />

            <TableForSystemConfig id={2} data={currenciesData} />

        </section>
    )
}