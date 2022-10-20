import React, { useState } from 'react'
import { DateInput } from '../../components/Inputs/DateInput'
import { SelectInput } from '../../components/Inputs/SelectInput';
import { typeofUserOptions } from '../../utils/dataForSelect';
import Pagination from 'rc-pagination';

export const data = [
    {
        id: 1,
        date: '03-03-2022 15:59:16',
        name: 'Santiago Moreno',
        docType: 'CUIT',
        docNumber: '303534534534543',
        userType: 'JURIDICO',
        accountNumber: '152055405461',
    },
    {
        id: 2,
        date: '04-03-2022 17:37:54',
        name: 'MatiAcero',
        docType: 'CUIL',
        docNumber: '20161241483',
        userType: 'FISICO',
        accountNumber: '156353904270',
    },
    {
        id: 3,
        date: '09-03-2022 14:30:44',
        name: 'FernandaCarrero',
        docType: 'CUIT',
        docNumber: '20217814686',
        userType: 'FISICO',
        accountNumber: '151212953818',
    },
    {
        id: 4,
        date: '08-07-2022 18:28:16',
        name: 'Gabriela AndreaPerez de la Rosa',
        docType: 'CUIL',
        docNumber: '23263521455',
        userType: 'FISICO',
        accountNumber: '152341077023',
    },

]

export const Reports = () => {

    /* STATES FOR THE INPUTS */

    const [dateInit, setDateInit] = useState('');
    const [typeOfUser, setTypeOfUser] = useState('');

    /* STATES FOR THE DATA */

    const [totalElements, setTotalElements] = useState(20);
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(2);

    return (
        <section className='p-4'>

            <h1 className="text-3xl font-bold text-center"> Reportes </h1>
            <h3 className="text-2xl font-bold text-center mt-4 text-green-400"> <span className='bg-gray-800 px-4 py-2 rounded-md'>Reporte diario nuevas cuentas</span> </h3>


            <div className="bg-gray-700 rounded-md mt-10 mb-10">

                <div className='p-4'>
                    <div className='row flex justify-center'>
                        <DateInput inputTitle={'Fecha'} value={dateInit} setValue={setDateInit} inputName={'dateInit'} />
                        <SelectInput inputTitle={'Tipo de Usuario'} value={typeOfUser} setValue={setTypeOfUser} dataOptions={typeofUserOptions} inputName={'typeOfUser'} />
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

            <div className="mt-6">
                <div className="overflow-x-auto sm:-mx-4">
                    <div className="sm:px-4">
                        <table className="table border text-center">
                            <thead className="border-b bg-gray-800 rounded-2xl">
                                <tr>
                                    <th scope="col" className="text-sm font-medium text-gray-100 px-0 py-4 text-center">
                                        Fecha Alta Cuenta
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-100 px-0 py-4 text-center">
                                        Nombre o Razón Social
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-100 px-0 py-4 text-center">
                                        Tipo Documento
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-100 px-0 py-4 text-center">
                                        N°. de Documento
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-100 px-0 py-4 text-center">
                                        Tipo de Usuario
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-100 px-0 py-4 text-center">
                                        Número de cuenta (CVU)
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) => (
                                    <tr className="bg-white border-b" id={item.id}>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {item.date}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {item.name}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {item.docType}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {item.docNumber}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {item.userType}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {item.accountNumber}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <Pagination
                current={current} pageSize={pageSize} total={totalElements} locale={'en_US'}
                onChange={(value) => { setCurrent(value); console.log('Value : ', value); }}
                style={{ margin: "100px", display: 'flex', justifyContent: 'center' }}
            />

        </section>
    )
}
