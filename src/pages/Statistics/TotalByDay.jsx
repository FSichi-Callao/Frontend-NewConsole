import React, { useState } from 'react'
import { DateInput } from '../../components/Inputs'
import { PageTitles } from '../../components/PageSections'
import { ExportSectionWithReports } from '../../components/PageSections/ExportSection'
import { LineGraf } from './Grafics/LineGraf'

export const TotalByDay = () => {

    /* STATES FOR THE INPUTS */

    const [dateInit, setDateInit] = useState('');
    const [dateEnd, setDateEnd] = useState('');

    return (
        <section className='p-4'>
            <PageTitles title={'Estadísticas'} subtitle={'Número de transacciones procesadas por día clasificado por Tipo de Usuario'} color={'text-orange-400'} />

            <div className="bg-gray-700 rounded-md mt-10">

                <div className='p-4'>
                    <div className='row flex justify-center'>
                        <DateInput inputTitle={'Fecha inicio'} value={dateInit} setValue={setDateInit} inputName={'dateInit'} />
                        <DateInput inputTitle={'Fecha fin'} value={dateEnd} setValue={setDateEnd} inputName={'dateEnd'} />
                    </div>
                </div>

                <ExportSectionWithReports />

            </div>

            <LineGraf />

        </section>
    )
}