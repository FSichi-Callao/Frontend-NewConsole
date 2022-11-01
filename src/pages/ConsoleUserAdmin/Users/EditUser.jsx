import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { SelectInput, TextInput } from '../../../components/Inputs';
import { PageTitles } from '../../../components/PageSections';
import { profileOptions } from '../../../utils/dataForSelect';
import { dataConsoleUsersList } from './data';

export const EditUser = () => {

    const { id } = useParams();
    const [user, setUser] = useState({});
    const [loadState, setLoadState] = useState(false);

    /* STATES FOR THE INPUTS */

    const [userProfileType, setUserProfileType] = useState('');

    useEffect(() => {
        setUser(dataConsoleUsersList.find(user => user.id == id));
        setUserProfileType(user.profile);
        setLoadState(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, loadState]);

    return (
        <section className='p-4'>

            <PageTitles title={'Administración de usuarios'} subtitle={'Editar usuario'} color={'text-red-600'} />

            <div className='bg-gray-800 mt-10 rounded-lg'>

                {
                    (loadState) &&
                    (
                        <div className='row p-3'>
                            <div className='col-6'>
                                <TextInput inputTitle={'Nombre'} value={user.name} setValue={() => { }} inputName={'userName'} col={12} disabled={true} />
                                <TextInput inputTitle={'Apellido'} value={user.lastName} setValue={() => { }} inputName={'userLastName'} col={12} disabled={true} />
                                <TextInput inputTitle={'Documento (DNI)'} value={user.documentNumber} setValue={() => { }} inputName={'userDocument'} col={12} disabled={true} />
                            </div>
                            <div className='col-6'>
                                <TextInput inputTitle={'E-mail'} value={user.mail} setValue={() => { }} inputName={'userMail'} col={12} disabled={true} />
                                <SelectInput inputTitle={'Perfil'} value={userProfileType} setValue={setUserProfileType} dataOptions={profileOptions} inputName={'typeOfProfile'} col={12} />
                            </div>

                        </div>
                    )
                }

                <ActionsComponent />

            </div>

        </section>
    )
}

const ActionsComponent = () => {
    return (
        <div className="bg-gray-700 px-4 py-4 text-right sm:px-6 rounded-lg mt-3">
            <div className='flex justify-between'>
                <Link to={`/admin-users`} type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 hover:bg-red-700 py-2 px-5 text-sm font-medium text-white buttonStyleCustom">
                    Regresar
                </Link>
                <div>
                    <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-gray-200 hover:bg-orange-500 py-2 px-5 text-sm font-medium text-gray-900 buttonStyleCustom mr-5">
                        Restablecer Contraseña
                    </button>
                    <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-teal-600 hover:bg-cyan-700 py-2 px-5 text-sm font-medium text-white buttonStyleCustom">
                        Agregar Usuario
                    </button>
                </div>
            </div>
        </div>
    )
}