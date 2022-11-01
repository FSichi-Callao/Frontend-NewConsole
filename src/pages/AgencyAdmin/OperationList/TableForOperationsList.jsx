import React from 'react'

export const TableForOperationsList = ({ data, onOpenModal }) => {

    const headers = ['Fecha', 'Moneda', 'Monto', 'Nombre de Transaccion', 'Tipo de Operacion', 'Estado', 'Detalles'];

    return (
        <table className="table border text-center">
            <thead className="border-b bg-gray-800 rounded-2xl">
                <tr>
                    {headers.map((item) => (
                        <th scope="col" className="text-sm font-medium text-gray-100 px-0 py-4 text-center">{item}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr className="bg-white border-b" id={item.id}>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {item.date}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {item.currency}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {item.amount}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {item.transactionName}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {item.operationType}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {item.state}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap">
                            <button className='bg-slate-900 p-2 text-white rounded-md hover:bg-sky-500' onClick={() => { onOpenModal(item) }}>Visualizar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
