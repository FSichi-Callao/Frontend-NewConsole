import { Link } from "react-router-dom"

export const BackButton = ({ route }) => {
    return (
        <div className='row mt-4'>
            <div className="col-md-6 col-sm-6 col-lg-3">
                <Link to={route} className='bg-gray-900 text-gray-100 hover px-3 py-2 rounded-md hover:text-gray-900 hover:bg-orange-500'>
                    <i className="fa-solid fa-angle-left me-3" style={{ color: '#368ccc', fontSize: '15px' }}></i>
                    Regresar
                </Link>
            </div>
        </div>
    )
}
