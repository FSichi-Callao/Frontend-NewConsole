import { useState } from 'react'
import { typeofUserOptions } from '../../utils/dataForSelect';
import { PageTitles } from '../../components/PageSections';
import { PaginationSection } from '../../components/Pagination/PaginationSection';
import { DateInput, SelectInput } from '../../components/Inputs';
import { reportsData } from './data';
import { TableForReports } from './TableForReports';
import { ExportSectionWithReports } from '../../components/PageSections/ExportSection';

export const Reports = () => {

    /* STATES FOR THE DATA */

    const [totalElements, setTotalElements] = useState(20);
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(2);

    /* STATES FOR THE INPUTS */

    const [dateInit, setDateInit] = useState('');
    const [typeOfUser, setTypeOfUser] = useState('');

    const onChangeCurrent = (value) => { setCurrent(value); }

    return (
        <section className='p-4'>

            <PageTitles title={'Reportes'} subtitle={'Reporte diario nuevas cuentas'} color={'text-green-400'} />

            <div className="bg-gray-700 rounded-md mt-10 mb-10">

                <div className='p-4'>
                    <div className='row flex justify-center'>
                        <DateInput inputTitle={'Fecha'} value={dateInit} setValue={setDateInit} inputName={'dateInit'} />
                        <SelectInput inputTitle={'Tipo de Usuario'} value={typeOfUser} setValue={setTypeOfUser} dataOptions={typeofUserOptions} inputName={'typeOfUser'} />
                    </div>
                </div>

                <ExportSectionWithReports />

            </div>

            <div className="mt-6">
                <div className="overflow-x-auto sm:-mx-4">
                    <div className="sm:px-4">
                        <TableForReports data={reportsData} />
                    </div>
                </div>
            </div>

            <PaginationSection current={current} changeCurrent={onChangeCurrent} pageSize={pageSize} totalElements={totalElements} />

        </section>
    )
}