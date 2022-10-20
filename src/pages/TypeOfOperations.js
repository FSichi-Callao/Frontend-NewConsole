import React, { useState } from 'react'
import { DonoutGraf } from '../components/DonoutGraf/DonoutGraf';
import { DateInput } from '../components/Inputs/DateInput'

export const TypeOfOperations = () => {

    /* STATES FOR THE INPUTS */

    const [dateInit, setDateInit] = useState('');
    const [dateEnd, setDateEnd] = useState('');

    return (
        <section className='p-4'>
            <h1 className="text-3xl font-bold text-center"> Estadísticas </h1>
            <h3 className="text-2xl font-bold text-center mt-4 text-orange-400"> <span className='bg-gray-800 px-4 py-2 rounded-md'>Porcentaje de transacciones procesadas clasificado por Tipo de Operaciones</span> </h3>

            <div className="bg-gray-700 rounded-md mt-10">

                <div className='p-4'>
                    <div className='row flex justify-center'>
                        <DateInput inputTitle={'Fecha inicio'} value={dateInit} setValue={setDateInit} inputName={'dateInit'} />
                        <DateInput inputTitle={'Fecha fin'} value={dateEnd} setValue={setDateEnd} inputName={'dateEnd'} />
                    </div>
                </div>

                <div className="bg-gray-800 px-4 py-3 text-right sm:px-6">
                    <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-500 hover:bg-cyan-700 py-2 px-5 text-sm font-medium text-white buttonStyleCustom">
                        Generar Reporte
                    </button>
                    <button className="inline-flex justify-center rounded-md border border-transparent bg-green-600 hover:bg-cyan-700 py-2 px-5 text-sm font-medium text-white buttonStyleCustom ml-5">
                        Exportar
                    </button>
                </div>

            </div>

            <DonoutGraf />

        </section>
    )
}
