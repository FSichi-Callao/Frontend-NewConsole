import React from 'react'

export const TableForUserList = ({ data }) => {

    const headers = [
        'Fecha', 'Nombre /Razón Social', 'Apellido', 'Tipo de Documento',
        'Documento', 'CVU', 'Alias', 'Tipo de Usuario', 'Estado', 'PEP', 'Sujeto Obligado', 'Accion'
    ];

    return (
        <table className="border text-center">
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
    )
}