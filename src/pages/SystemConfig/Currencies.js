import React from 'react'

const data = [
    {
        id: 1,
        currency: 'Pesos Argentinos',
        name: 'ARS',
        code: 'N/D',
        state: 'Activo'
    },
]

export const Currencies = () => {
    return (
        <section className='p-4'>
            <h1 className="text-3xl font-bold text-center"> Configuración del sistema </h1>
            <h3 className="text-2xl font-bold text-center mt-4 text-indigo-400"> <span className='bg-gray-800 px-4 py-2 rounded-md'>Listado de monedas</span> </h3>

            <div className='flex justify-end mt-14'>
                <p className='me-4 mt-2'>Total de Registros: <span className='text-indigo-600 font-semibold'>200</span></p>
                <button className="inline-flex justify-center rounded-md border border-transparent bg-indigo-500 hover:bg-cyan-700 py-2 px-5 text-sm font-medium text-white buttonStyleCustom">
                    Exportar
                </button>
            </div>

            <div className="mt-6">
                <div className="overflow-x-auto sm:-mx-4">
                    <div className="sm:px-4">
                        <table className="table border text-center">
                            <thead className="border-b bg-gray-800">
                                <tr>
                                    <th scope="col" className="text-sm font-medium text-gray-100 px-0 py-4 text-center">
                                        Moneda
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-100 px-0 py-4 text-center">
                                        Nombre Corto
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-100 px-0 py-4 text-center">
                                        Codigo
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-100 px-0 py-4 text-center">
                                        Estado
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) => (
                                    <tr className="bg-white border-b" id={item.id}>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {item.currency}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {item.name}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {item.code}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {item.state}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </section>
    )
}
