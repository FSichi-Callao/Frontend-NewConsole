import React, { useState } from 'react'
import Pagination from 'rc-pagination';
import { Link } from 'react-router-dom';

const data = [
    {
        id: 1,
        date: '25-08-2021 15:30:50',
        name: 'admin 1',
        mail: 'admint@test.com',
        profile: 'SysAdmin',
        status: true
    },
    {
        id: 2,
        date: '21-02-2022 15:30:33',
        name: 'admin paas',
        mail: 'adminpaas@elcallao.com',
        profile: 'SysAdmin',
        status: true
    },
    {
        id: 3,
        date: '25-05-2022 11:51:57',
        name: 'Marylin Carrillo Ochoa',
        mail: 'mcusuariopaasqa@yopmail.com',
        profile: 'Administrador',
        status: true
    },
    {
        id: 4,
        date: '25-05-2022 11:53:48',
        name: 'Andre Colmenares',
        mail: 'giancolbe@yopmail.com',
        profile: 'Administrador',
        status: false
    },
    {
        id: 5,
        date: '21-09-2022 09:36:08',
        name: 'Zerpa Zarate',
        mail: 'zzarate@yopmail.com',
        profile: 'Empleado',
        status: true
    },

]

export const Users = () => {

     /* STATES FOR THE DATA */

     const [totalElements, setTotalElements] = useState(20);
     const [current, setCurrent] = useState(1);
     const [pageSize, setPageSize] = useState(2);

    return (
        <section className='p-4'>
            <h1 className="text-3xl font-bold text-center"> Administración de usuarios </h1>
            <h3 className="text-2xl font-bold text-center mt-4 text-red-600"> <span className='bg-gray-800 px-4 py-2 rounded-md'>Gestión de usuarios</span> </h3>

            <div className="bg-gray-800 px-4 py-3 sm:px-6 rounded-lg mt-10 flex justify-between">
                <p className='inline-flex me-4 mt-2 text-white font-semibold'>Total de Registros: <span className='text-indigo-400 font-semibold ml-4'>200</span></p>
                <div>
                    <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-500 hover:bg-cyan-700 py-2 px-5 text-sm font-medium text-white buttonStyleCustom">
                        Exportar
                    </button>
                    <Link to={`/user`} className="inline-flex justify-center rounded-md border border-transparent bg-green-600 hover:bg-cyan-700 py-2 px-5 text-sm font-medium text-white buttonStyleCustom ml-5">
                        Agregar Nuevo Usuario
                    </Link>
                </div>
            </div>

            <div className="mt-6">
                <div className="overflow-x-auto sm:-mx-4">
                    <div className="sm:px-4">
                        <table className="table border text-center">
                            <thead className="border-b bg-gray-800 rounded-2xl">
                                <tr>
                                    <th scope="col" className="text-sm font-medium text-gray-100 px-0 py-4 text-center">
                                        Fecha de creación
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-100 px-0 py-4 text-center">
                                        Nombre
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-100 px-0 py-4 text-center">
                                        E-mail
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-100 px-0 py-4 text-center">
                                        Perfil
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-100 px-0 py-4 text-center">
                                        Acciones
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-100 px-0 py-4 text-center">
                                        Bloquear / Activar
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
                                            {item.mail}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {item.profile}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap">
                                            <div className='flex justify-between'>
                                                <button className='ml-3 bg-slate-900 p-2 text-white rounded-md hover:bg-sky-500'>Editar</button>
                                                <button className='bg-slate-900 p-2 text-white rounded-md hover:bg-red-500'>Eliminar</button>
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

                    </div>
                </div>
            </div>

            <Pagination
                current={current} pageSize={pageSize} total={totalElements} locale={'en_US'}
                onChange={(value) => { setCurrent(value); console.log('Value : ', value); }}
                style={{ margin: "50px", display: 'flex', justifyContent: 'center' }}
            />

        </section>
    )
}
