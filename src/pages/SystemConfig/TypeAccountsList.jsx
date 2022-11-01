import React from 'react'
import { ExportSectionWithoutPageSize, PageTitles } from '../../components/PageSections'
import { TableForSystemConfig } from '../../components/Table/TableForSystemConfig'
import { typeAccountsListData } from './data'

export const TypeAccountsList = () => {
    return (
        <section className='p-4'>
            
            <PageTitles title={'Configuración del sistema'} subtitle={'Tipos de cuentas'} color={'text-indigo-400'} />

            <ExportSectionWithoutPageSize />

            <TableForSystemConfig id={4} data={typeAccountsListData} />

        </section>
    )
}