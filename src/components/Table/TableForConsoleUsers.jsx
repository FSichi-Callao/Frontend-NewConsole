import React from 'react'
import { Link } from 'react-router-dom';

export const TableForConsoleUsers = ({ data }) => {

    const headers = ['Fecha de creación', 'Nombre', 'E-mail', 'Perfil', 'Acciones', 'Bloquear / Activar'];

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
                            {item.name + item.lastName}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {item.mail}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {item.profile}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap">
                            <div className='flex justify-center'>
                                <Link to={`/user/${item.id}`} className='bg-slate-900 p-2 text-white rounded-md hover:bg-sky-500'>Editar</Link>
                                <button className='bg-slate-900 p-2 text-white rounded-md hover:bg-red-500 ml-4'>Eliminar</button>
                            </div>
                        </td>
                        <td className='flex justify-center border-none mt-3' style={{ fontSize: '25px' }}>
                            <div className="form-check form-switch">
                                {
                                    (item.status === true)
                                        ? <input className='form-check-input' type="checkbox" defaultChecked={true} />
                                        : <input className='form-check-input' type="checkbox" />
                                }
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}