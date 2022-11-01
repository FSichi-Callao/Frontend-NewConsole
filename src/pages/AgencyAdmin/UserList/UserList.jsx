import { useState } from 'react'
import { DateInput, SelectInput, TextInput } from '../../../components/Inputs';
import { ExportSectionWithPageSize, PageTitles } from '../../../components/PageSections';
import { PaginationSection } from '../../../components/Pagination/PaginationSection';
import { pepOptions, stateOptions, typeofDocumentOptions, typeofUserOptions } from '../../../utils/dataForSelect';
import { usersData } from './data';
import { TableForUserList } from './TableForUserList';

export const UserList = () => {

    /* STATES FOR THE DATA */

    const [totalElements, setTotalElements] = useState(20);
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(2);

    /* STATES FOR THE INPUTS */

    const [dateInit, setDateInit] = useState('');
    const [dateEnd, setDateEnd] = useState('');
    const [typeOfUser, setTypeOfUser] = useState('');
    const [state, setState] = useState('');
    const [typeOfDocument, setTypeOfDocument] = useState('');
    const [document, setDocument] = useState('');
    const [cvu, setCvu] = useState('');
    const [pep, setPep] = useState('');

    const onChangeCurrent = (value) => { setCurrent(value); }

    return (
        <section className='p-4'>

            <PageTitles title={'Administración de red'} subtitle={'Información de usuarios'} color={'text-cyan-400'} />

            <div className="bg-gray-700 rounded-md mt-10 mb-10">

                <div className='p-4'>

                    <div className='row'>
                        <DateInput inputTitle={'Fecha inicio'} value={dateInit} setValue={setDateInit} inputName={'startDate'} />
                        <DateInput inputTitle={'Fecha fin'} value={dateEnd} setValue={setDateEnd} inputName={'endDate'} />
                        <SelectInput inputTitle={'Tipo de usuario'} value={typeOfUser} setValue={setTypeOfUser} dataOptions={typeofUserOptions} inputName={'typeUser'} />
                        <SelectInput inputTitle={'Estado'} value={state} setValue={setState} dataOptions={stateOptions} inputName={'state'} />
                        <SelectInput inputTitle={'Tipo de documento'} value={typeOfDocument} setValue={setTypeOfDocument} dataOptions={typeofDocumentOptions} inputName={'typeOfDocument'} />
                        <TextInput inputTitle={'Documento'} inputName={'document'} placeholder={''} value={document} setValue={setDocument} keyPressEvent={() => { }} />
                        <TextInput inputTitle={'CVU'} inputName={'cvu'} placeholder={''} value={cvu} setValue={setCvu} keyPressEvent={() => { }} />
                        <SelectInput inputTitle={'Pep'} value={pep} setValue={setPep} dataOptions={pepOptions} inputName={'pep'} />
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
                        <TableForUserList data={usersData} />
                    </div>
                </div>
            </div>

            <PaginationSection current={current} changeCurrent={onChangeCurrent} pageSize={pageSize} totalElements={totalElements} />

        </section>
    )
}