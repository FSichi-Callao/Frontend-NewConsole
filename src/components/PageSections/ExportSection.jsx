import { Link } from "react-router-dom"
import { pageSizeOptions } from "../../utils/dataForSelect"
import { SelectInputPageSize } from "../Inputs"

export const ExportSectionWithPageSize = ({ pageSize, setPageSize }) => {
    return (
        <div className='flex justify-between mt-4 bg-gray-800 p-3 text-white rounded-lg'>
            <p className='me-4 mt-2'>Total de Registros: <span className='text-indigo-400 font-semibold'>200</span></p>
            <div className="flex justify-end">
                <SelectInputPageSize value={pageSize} setValue={setPageSize} dataOptions={pageSizeOptions} inputName={'pageSize'} />
                <button className="ml-10 inline-flex justify-center rounded-md border border-transparent bg-indigo-500 hover:bg-cyan-700 py-2 px-5 text-sm font-medium text-white buttonStyleCustom">
                    Exportar
                </button>
            </div>
        </div>
    )
}

export const ExportSectionWithoutPageSize = () => {
    return (
        <div className='flex justify-end mt-14 mb-6 bg-gray-800 p-3 text-white rounded-lg'>
            <p className='me-4 mt-2'>Total de Registros: <span className='text-indigo-400 font-semibold'>200</span></p>
            <button className="inline-flex justify-center rounded-md border border-transparent bg-indigo-500 hover:bg-cyan-700 py-2 px-5 text-sm font-medium text-white buttonStyleCustom">
                Exportar
            </button>
        </div>
    )
}

export const ExportSectionWithReports = () => {
    return (
        <div className="bg-gray-800 px-4 py-3 text-right sm:px-6 rounded-b-lg">
            <button className="inline-flex justify-center rounded-md border border-transparent bg-green-600 hover:bg-cyan-700 py-2 px-5 text-sm font-medium text-white buttonStyleCustom">
                Exportar
            </button>
            <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-500 hover:bg-cyan-700 py-2 px-5 text-sm font-medium text-white buttonStyleCustom  ml-5">
                Generar Reporte
            </button>
        </div>
    )
}

export const ExportSectionForConsoleAdmin = ({ totalRecords, buttonTitle, link }) => {
    return (
        <div className="bg-gray-800 px-4 py-3 sm:px-6 rounded-lg mt-10 flex justify-between">
            <p className='inline-flex me-4 mt-2 text-white font-semibold'>Total de Registros: <span className='text-indigo-400 font-semibold ml-4'>{totalRecords}</span></p>
            <div>
                <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-500 hover:bg-cyan-700 py-2 px-5 text-sm font-medium text-white buttonStyleCustom">
                    Exportar
                </button>
                <Link to={link} className="inline-flex justify-center rounded-md border border-transparent bg-green-600 hover:bg-cyan-700 py-2 px-5 text-sm font-medium text-white buttonStyleCustom ml-5">
                    {buttonTitle}
                </Link>
            </div>
        </div>
    )
}
