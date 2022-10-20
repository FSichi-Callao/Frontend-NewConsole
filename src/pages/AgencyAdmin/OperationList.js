import React, { useState } from 'react'
import { DateInput } from '../../components/Inputs/DateInput'
import { SelectInput } from '../../components/Inputs/SelectInput';
import { TextInput } from '../../components/Inputs/TextInput';
import { PopupModal } from '../../components/Popup/PopupExample2';
import { operationTypeOptions, stateOptions, transactionTypeOptions, typeofDocumentOptions } from '../../utils/dataForSelect';
import Pagination from 'rc-pagination';


export const data = [
    {
        id: '1',
        date: '22-08-2022',
        currency: 'ARS',
        amount: '-10,00',
        transactionName: 'transferencia.interna.saliente',
        operationType: 'debito',
        state: 'Realizada',
    },
    {
        id: '2',
        date: '22-08-2022',
        currency: 'ARS',
        amount: '10,00',
        transactionName: 'transferencia.interna.entrante',
        operationType: 'credito',
        state: 'Realizada',
    },
    {
        id: '3',
        date: '22-08-2022',
        currency: 'ARS',
        amount: '-5.000,00',
        transactionName: 'transferencia.interna.saliente',
        operationType: 'debito',
        state: 'Realizada',
    },

]

export const OperationList = () => {

    /* STATES FOR THE DATA */

    const [totalElements, setTotalElements] = useState(20);
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(2);

    /* STATES FOR THE INPUTS */
    const [dateInit, setDateInit] = useState('');
    const [dateEnd, setDateEnd] = useState('');
    const [typeOfDocument, setTypeOfDocument] = useState('');
    const [document, setDocument] = useState('');
    const [account, setAccount] = useState('');
    const [typeOfTransaction, setTypeOfTransaction] = useState('');
    const [typeOfOperation, setTypeOfOperation] = useState('');
    const [startingAmount, setStartingAmount] = useState('');
    const [higherAmount, setHigherAmount] = useState('');
    const [state, setState] = useState('');

    const [operationSelected, setOperationSelected] = useState({});
    const [openModal, setOpenModal] = useState(false);

    const onOpenModal = (item) => {
        setOperationSelected(item);
        setOpenModal(true);
    }

    const onCloseModal = () => {
        setOperationSelected({});
        setOpenModal(false);
    }

    return (
        <div className='p-4'>
            <h1 className="text-3xl font-bold text-center"> Administración de red </h1>
            <h3 className="text-2xl font-bold text-center mt-3 text-cyan-400"> <span className='bg-gray-800 px-4 py-2 rounded-md'>Información de operaciones</span> </h3>

            <div className="bg-gray-700 rounded-md mt-10 mb-10">

                <div className='p-4'>

                    <div className='row flex justify-center'>
                        <DateInput inputTitle={'Fecha inicio'} value={dateInit} setValue={setDateInit} inputName={'dateInit'} />
                        <DateInput inputTitle={'Fecha fin'} value={dateEnd} setValue={setDateEnd} inputName={'dateEnd'} />
                    </div>

                    <div className='row'>
                        <SelectInput inputTitle={'Tipo de documento'} value={typeOfDocument} setValue={setTypeOfDocument} dataOptions={typeofDocumentOptions} inputName={'typeOfDocument'} />
                        <TextInput inputTitle={'Numero de documento'} value={document} setValue={setDocument} inputName={'document'} />
                        <TextInput inputTitle={'Cuenta'} value={account} setValue={setAccount} inputName={'account'} />
                        <SelectInput inputTitle={'Tipo de transacción'} value={typeOfTransaction} setValue={setTypeOfTransaction} dataOptions={transactionTypeOptions} inputName={'typeOfTransaction'} />
                        <SelectInput inputTitle={'Tipo de operación'} value={typeOfOperation} setValue={setTypeOfOperation} dataOptions={operationTypeOptions} inputName={'typeOfOperations'} />
                        <TextInput
                            inputTitle={'Monto inicial'} inputName={'startingAmount'} placeholder={'$'}
                            value={startingAmount} setValue={setStartingAmount}
                            keyPressEvent={(event) => {
                                if (!/[0-9]/.test(event.key) && !/[.]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                        />
                        <TextInput
                            inputTitle={'Monto superior'} inputName={'higherAmount'} placeholder={'$'}
                            value={higherAmount} setValue={setHigherAmount}
                            keyPressEvent={(event) => {
                                if (!/[0-9]/.test(event.key) && !/[.]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                        />
                        <SelectInput inputTitle={'Estado'} value={state} setValue={setState} dataOptions={stateOptions} inputName={'state'} />
                    </div>
                </div>

                <div className="bg-gray-800 px-4 py-3 text-right sm:px-6">
                    <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-500 hover:bg-cyan-700 py-2 px-5 text-sm font-medium text-white buttonStyleCustom">
                        Buscar
                    </button>
                </div>

            </div>

            <div className='flex justify-end mt-4'>
                <p className='me-4 mt-2'>Total de Registros: <span className='text-indigo-600 font-semibold'>200</span></p>
                <button className="inline-flex justify-center rounded-md border border-transparent bg-indigo-500 hover:bg-cyan-700 py-2 px-5 text-sm font-medium text-white buttonStyleCustom">
                    Exportar
                </button>
            </div>

            <div className="mt-6">
                <div className="overflow-x-auto sm:-mx-4">
                    <div className="sm:px-4">
                        <table className="table border text-center">
                            <thead className="border-b bg-gray-800 rounded-2xl">
                                <tr>
                                    <th scope="col" className="text-sm font-medium text-gray-100 px-0 py-4 text-center">
                                        Fecha
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-100 px-0 py-4 text-center">
                                        Moneda
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-100 px-0 py-4 text-center">
                                        Monto
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-100 px-0 py-4 text-center">
                                        Nombre de Transaccion
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-100 px-0 py-4 text-center">
                                        Tipo de Operacion
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-100 px-0 py-4 text-center">
                                        Estado
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-100 px-0 py-4 text-center">
                                        Detalles
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

                        {(openModal) && <PopupModal userData={operationSelected} openValue={openModal} closeFunction={onCloseModal} />}


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