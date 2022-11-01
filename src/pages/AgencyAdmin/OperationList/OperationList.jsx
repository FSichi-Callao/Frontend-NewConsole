import { useState } from 'react'
import { DateInput, SelectInput, TextInput } from '../../../components/Inputs';
import { PopupModal } from '../../../components/PopupModal/PopupModal';
import { operationTypeOptions, stateOptions, transactionTypeOptions, typeofDocumentOptions } from '../../../utils/dataForSelect';
import { ExportSectionWithPageSize, PageTitles } from '../../../components/PageSections';
import { PaginationSection } from '../../../components/Pagination/PaginationSection';
import { TableForOperationsList } from './TableForOperationsList';
import { operationsData } from './data';

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

    const onChangeCurrent = (value) => { setCurrent(value); }

    return (
        <section className='p-4'>

            <PageTitles title={'Administración de red'} subtitle={'Información de operaciones'} color={'text-cyan-400'} />

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

                <div className="bg-gray-800 px-4 py-3 text-right sm:px-6 rounded-md">
                    <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-500 hover:bg-cyan-700 py-2 px-5 text-sm font-medium text-white buttonStyleCustom">
                        Buscar
                    </button>
                </div>

            </div>

            <ExportSectionWithPageSize pageSize={pageSize} setPageSize={setPageSize} />

            <div className="mt-6">
                <div className="overflow-x-auto sm:-mx-4">
                    <div className="sm:px-4">
                        <TableForOperationsList data={operationsData} onOpenModal={onOpenModal} />
                    </div>
                </div>
            </div>

            {(openModal) && <PopupModal userData={operationSelected} openValue={openModal} closeFunction={onCloseModal} />}

            <PaginationSection current={current} changeCurrent={onChangeCurrent} pageSize={pageSize} totalElements={totalElements} />

        </section>
    )
}