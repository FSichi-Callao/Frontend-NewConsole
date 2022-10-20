import React, { useState } from 'react'
import Pagination from 'rc-pagination';


const data = [
    {
        id: 1,
        date: '19-09-2022 10:11:40',
        name: 'Luisa',
        lastName: 'Rodriguez',
        documentType: 'CUIL',
        documentNumber: '27245630129',
        cvu: '0000069700102500003780',
        alias: 'lrodriguez378.cdma',
        userType: 'FISICO',
        status: 'Activo',
        pep: 'Si',
        obligated: 'Si'
    },
    {
        id: 2,
        date: '19-09-2022 10:11:40',
        name: 'Luisa',
        lastName: 'Rodriguez',
        documentType: 'CUIL',
        documentNumber: '27245630129',
        cvu: '0000069700102500003780',
        alias: 'lrodriguez378.cdma',
        userType: 'FISICO',
        status: 'Activo',
        pep: 'Si',
        obligated: 'Si'
    },
    {
        id: 3,
        date: '19-09-2022 10:11:40',
        name: 'Luisa',
        lastName: 'Rodriguez',
        documentType: 'CUIL',
        documentNumber: '27245630129',
        cvu: '0000069700102500003780',
        alias: 'lrodriguez378.cdma',
        userType: 'FISICO',
        status: 'Activo',
        pep: 'Si',
        obligated: 'Si'
    },
    {
        id: 3,
        date: '19-09-2022 10:11:40',
        name: 'Luisa',
        lastName: 'Rodriguez',
        documentType: 'CUIL',
        documentNumber: '27245630129',
        cvu: '0000069700102500003780',
        alias: 'lrodriguez378.cdma',
        userType: 'FISICO',
        status: 'Activo',
        pep: 'Si',
        obligated: 'Si'
    }
]

export const UserList = () => {

    /* STATES FOR THE DATA */

    const [totalElements, setTotalElements] = useState(20);
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(2);

    return (
        <div className='p-4'>
            <h1 className="text-3xl font-bold text-center"> Administración de red </h1>
            <h3 className="text-2xl font-bold text-center mt-3 text-cyan-400"> <span className='bg-gray-800 px-4 py-2 rounded-md'>Información de usuarios</span> </h3>
            {/* <h3 className="text-2xl font-bold text-center mt-2 text-indigo-600"> Información de usuarios </h3> */}


            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="mt-8 md:col-span-3">
                    <div className="overflow-hidden shadow sm:rounded-md">
                        <div className="bg-gray-700 px-4 py-5 sm:p-6">
                            <div className="grid grid-cols-12 gap-6">
                                <div className="col-span-3 sm:col-span-3">
                                    <label for="first-name" className="block text-sm font-medium text-gray-200">Fecha Inicio</label>
                                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" className="mt-1 h-9 block w-full rounded-md border-gray-300 focus:border-indigo-300 focus:ring-indigo-500 sm:text-sm p-2" />
                                </div>

                                <div className="col-span-2 sm:col-span-3">
                                    <label for="last-name" className="block text-sm font-medium text-gray-200">Fecha Fin</label>
                                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" className="mt-1 h-9 block w-full rounded-md border-gray-300 focus:border-indigo-300 focus:ring-indigo-500 sm:text-sm p-2" />
                                </div>

                                <div className="col-span-2 sm:col-span-3">
                                    <label for="email-address" className="block text-sm font-medium text-gray-200">Tipo de Usuario</label>
                                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" className="mt-1 h-9 block w-full rounded-md border-gray-300 focus:border-indigo-300 focus:ring-indigo-500 sm:text-sm p-2" />
                                </div>

                                <div className="col-span-2 sm:col-span-3">
                                    <label for="email-address" className="block text-sm font-medium text-gray-200">Estado</label>
                                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" className="mt-1 h-9 block w-full rounded-md border-gray-300 focus:border-indigo-300 focus:ring-indigo-500 sm:text-sm p-2" />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label for="country" className="block text-sm font-medium text-gray-200">Tipo de Documento</label>
                                    <select id="country" name="country" autocomplete="country-name" className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <option>DNI</option>
                                        <option>CUIL</option>
                                        <option>CUIT</option>
                                    </select>
                                </div>

                                <div className="col-span-2 sm:col-span-3">
                                    <label for="email-address" className="block text-sm font-medium text-gray-200">Documento</label>
                                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" className="mt-1 h-9 block w-full rounded-md border-gray-300 focus:border-indigo-300 focus:ring-indigo-500 sm:text-sm p-2" />
                                </div>

                                <div className="col-span-2 sm:col-span-3">
                                    <label for="email-address" className="block text-sm font-medium text-gray-200">CVU</label>
                                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" className="mt-1 h-9 block w-full rounded-md border-gray-300 focus:border-indigo-300 focus:ring-indigo-500 sm:text-sm p-2" />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label for="country" className="block text-sm font-medium text-gray-200">Pep</label>
                                    <select id="country" name="country" autocomplete="country-name" className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <option>Si</option>
                                        <option>No</option>
                                    </select>
                                </div>

                            </div>
                        </div>
                        <div className="bg-gray-800 px-4 py-3 text-right sm:px-6">
                            <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-500 hover:bg-cyan-700 py-2 px-5 text-sm font-medium text-white buttonStyleCustom">
                                Buscar
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-end mt-4'>
                <p className='me-4 mt-2'>Total de Registros: <span className='text-indigo-600 font-semibold'>200</span></p>
                <button className='btn btn-success'>Exportar</button>
            </div>

            <div className="mt-6">
                <div className="overflow-x-auto sm:-mx-4">
                    <div className="sm:px-4">

                        <table className="border text-center">
                            <thead className="border-b bg-gray-800 rounded-2xl">
                                <tr>
                                    <th scope="col" className="text-sm font-medium text-gray-100 px-0 py-4 text-center">
                                        Fecha
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-100 px-0 py-4 text-center">
                                        Nombre /Razón Social
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-100 px-0 py-4 text-center">
                                        Apellido
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-100 px-0 py-4 text-center">
                                        Tipo de Documento
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-100 px-0 py-4 text-center">
                                        Documento
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-100 px-0 py-4 text-center">
                                        CVU
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-100 px-0 py-4 text-center">
                                        Alias
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-100 px-0 py-4 text-center">
                                        Tipo de Usuario
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-100 px-0 py-4 text-center">
                                        Estado
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-100 px-0 py-4 text-center">
                                        PEP
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-100 px-0 py-4 text-center">
                                        Sujeto Obligado
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-100 px-1 py-4 text-center">
                                        Accion
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
                                            {item.lastName}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {item.documentType}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {item.documentNumber}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {item.cvu}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {item.alias}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {item.userType}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {item.status}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {item.pep}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-1 py-4 whitespace-nowrap">
                                            {item.obligated}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap">
                                            <button className='bg-slate-900 p-2 text-white rounded-md hover:bg-sky-500'>Legajo</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>


                        <Pagination
                            current={current} pageSize={pageSize} total={totalElements} locale={'en_US'}
                            onChange={(value) => { setCurrent(value); console.log('Value : ', value); }}
                            style={{ margin: "100px", display: 'flex', justifyContent: 'center' }}
                        />

                    </div>
                </div>
            </div>

        </div>
    )
}