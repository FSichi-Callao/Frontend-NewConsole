import React from 'react'
import {
    TableBodyAlarms,
    TableBodyCurrencies,
    TableBodyOperations,
    TableBodyTypeAccountsList,
    TableHeaderAlarms,
    TableHeaderCurrencies,
    TableHeaderOperations,
    TableHeaderTypeAccountsList
} from './TableComponents';

export const TableForSystemConfig = ({ id, data }) => {

    const headersAlarms = ['Mensaje', 'Accion', 'Tipo', 'Periodo', 'Estado', 'Valor', 'Acciones'];
    const headersCurrencies = ['Moneda', 'Nombre Corto', 'Codigo', 'Estado'];
    const headersOperations = ['Nombre', 'Moneda', 'Estado'];
    const headersTypeAccountList = ['Descripción', 'Tipo de usuario'];

    return (
        <table className="table border text-center">
            <thead className="border-b bg-gray-800">
                <tr>
                    {(id === 1) && <TableHeaderAlarms headers={headersAlarms} />}
                    {(id === 2) && <TableHeaderCurrencies headers={headersCurrencies} />}
                    {(id === 3) && <TableHeaderOperations headers={headersOperations} />}
                    {(id === 4) && <TableHeaderTypeAccountsList headers={headersTypeAccountList} />}
                </tr>
            </thead>
            <tbody>
                {(id === 1) && <TableBodyAlarms data={data} />}
                {(id === 2) && <TableBodyCurrencies data={data} />}
                {(id === 3) && <TableBodyOperations data={data} />}
                {(id === 4) && <TableBodyTypeAccountsList data={data} />}
            </tbody>
        </table>
    )
}