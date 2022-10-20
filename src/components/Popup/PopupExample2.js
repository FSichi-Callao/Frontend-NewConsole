import { info } from 'autoprefixer';
import React, { useState } from 'react'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import './PopupModal.css'

export const PopupModal = ({ userData, openValue, closeFunction }) => {

    const [infoPage, setInfoPage] = useState(true);
    const [detailsPage, setDetailsPage] = useState(false);
    const [clientPage, setClientPage] = useState(false);


    return (
        <Modal open={openValue} onClose={closeFunction} classNames={{ modal: 'customModal' }} >
            <h1 className="text-2xl font-bold text-center mt-3 text-cyan-400 mb-10"> <span className='bg-gray-700 px-4 py-2 rounded-md'>Detalles de Transacción</span> </h1>

            <div style={{ marginLeft: '20px' }}>

                {
                    (infoPage) &&
                    (
                        <>
                            <PopupContent title={'Monto'} value={"$ 41,00"} />
                            <PopupContent title={'Moneda'} value={"ARS"} />
                            <PopupContent title={'Tipo'} value={"Transferencia"} />
                            <PopupContent title={'Estado'} value={'Activo'} />
                            <PopupContent title={'Payment Method'} value={'Otros'} />
                            <PopupContent title={'Tipo de operación'} value={'Débito'} />
                        </>
                    )
                }
                {
                    (detailsPage) &&
                    (
                        <>
                            <PopupContent title={'IP del cliente'} value={"45.189.38.239"} />
                            <PopupContent title={'Tiempo de vigencia'} value={"24"} />
                            <PopupContent title={'Fecha y hora'} value={"13-10-2022 14:57:53"} />
                            <PopupContent title={'Descripción'} value={'Pago Alarma'} />
                            <PopupContent title={'Agente Web'} value={'Mozilla/5.0 (Windows NT 10.0) Chrome/105.0.0.0'} />
                            <PopupContent title={'ID remitente'} value={'151'} />
                            <PopupContent title={'ID destinatario'} value={'247'} />

                        </>
                    )
                }
                {
                    (clientPage) &&
                    (
                        <>
                            <PopupContent title={'Nombre del remitente'} value={'Bastidas Francisco'} />
                            <PopupContent title={'Documento remitente'} value={'27201239821'} />
                            <PopupContent title={'Documento fuente'} value={'20132589632'} />
                            <PopupContent title={'Nombre del destinatario'} value={'Ignacio Jose'} />
                            <PopupContent title={'Documento destinatario'} value={'27201239821'} />
                        </>
                    )
                }

            </div>
            <div className="actions">
                <section className='p-3 rounded-lg flex justify-between mt-3 '>
                    <div className=''>
                        <button
                            className={(infoPage)
                                ? 'inline-flex justify-center rounded-md bg-teal-600 py-2 px-5 text-sm font-medium text-gray-100'
                                : 'inline-flex justify-center rounded-md bg-gray-600 hover:bg-cyan-700 py-2 px-5 text-sm font-medium text-white '
                            }
                            onClick={() => { setInfoPage(true); setDetailsPage(false); setClientPage(false) }}
                        >
                            Transaccion
                        </button>
                        <button
                            className={(clientPage)
                                ? 'inline-flex justify-center rounded-md bg-teal-600 py-2 px-5 text-sm font-medium text-gray-100 ml-5'
                                : 'inline-flex justify-center rounded-md bg-gray-600 hover:bg-cyan-700 py-2 px-5 text-sm font-medium text-white ml-5'
                            }
                            onClick={() => { setInfoPage(false); setDetailsPage(false); setClientPage(true); }}
                        >
                            Clientes
                        </button>
                        <button
                            className={(detailsPage)
                                ? 'inline-flex justify-center rounded-md bg-teal-600 py-2 px-5 text-sm font-medium text-gray-100 ml-5'
                                : 'inline-flex justify-center rounded-md bg-gray-600 hover:bg-cyan-700 py-2 px-5 text-sm font-medium text-white ml-5'
                            }
                            onClick={() => { setInfoPage(false); setDetailsPage(true); setClientPage(false); }}
                        >
                            Detalles Tecnicos
                        </button>
                    </div>
                    <button className="ml-5 inline-flex justify-center rounded-md border border-transparent bg-blue-900 hover:bg-red-500 py-2 px-5 text-sm font-medium text-white buttonStyleCustom" onClick={closeFunction}>
                        Cerrar
                    </button>
                </section>
            </div>
        </Modal>
    );
}

const PopupContent = ({ title, value }) => {
    return (
        <div className='content-section-custom mt-3'>
            <div className='flex mt-12'>
                <h2 className='content-title-custom'><span className='bg-gray-600 text-cyan-400 p-2 rounded-lg'>{title}:</span></h2>
                <p className='content-values-custom text-white ml-5'>{(value === null) ? '-' : value}</p>
            </div>
        </div>
    )
}