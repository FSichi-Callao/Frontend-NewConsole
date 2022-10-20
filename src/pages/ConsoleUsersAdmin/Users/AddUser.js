import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { SelectInput } from '../../../components/Inputs/SelectInput';
import { TextInput } from '../../../components/Inputs/TextInput'
import { profileOptions } from '../../../utils/dataForSelect';

export const AddUser = () => {

    const [nameUser, setNameUser] = useState('');
    const [lastNameUser, setLastNameUser] = useState('');
    const [userDocument, setUserDocument] = useState('');
    const [userMail, setUserMail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userConfirmPass, setUserConfirmPass] = useState('');
    const [userProfileType, setUserProfileType] = useState('');


    return (
        <section className='p-4'>
            <h1 className="text-3xl font-bold text-center"> Administración de usuarios </h1>
            <h3 className="text-2xl font-bold text-center mt-4 text-red-600"> <span className='bg-gray-800 px-4 py-2 rounded-md'>Nuevo usuario</span> </h3>

            <div className='bg-gray-800 mt-10 rounded-lg'>

                <div className='row p-3'>
                    <div className='col-6'>
                        <TextInput inputTitle={'Nombre'} value={nameUser} setValue={setNameUser} inputName={'userName'} col={12} />
                        <TextInput inputTitle={'Apellido'} value={lastNameUser} setValue={setLastNameUser} inputName={'userLastName'} col={12} />
                        <TextInput inputTitle={'Documento (DNI)'} value={userDocument} setValue={setUserDocument} inputName={'userDocument'} col={12} />
                    </div>
                    <div className='col-6'>
                        <TextInput inputTitle={'E-mail'} value={userMail} setValue={setUserMail} inputName={'userMail'} col={12} />
                        <TextInput inputTitle={'Contraseña'} value={userPassword} setValue={setUserPassword} inputName={'userPassword'} col={12} />
                        <TextInput inputTitle={'Confirmar Contraseña'} value={userConfirmPass} setValue={setUserConfirmPass} inputName={'userConfirmPassword'} col={12} />
                    </div>
                    <div className='col-12'>
                        <SelectInput inputTitle={'Perfil'} value={userProfileType} setValue={setUserProfileType} dataOptions={profileOptions} inputName={'typeOfProfile'} col={12} />
                    </div>
                </div>

                <div className="bg-gray-700 px-4 py-4 text-right sm:px-6 rounded-lg mt-3">
                    <div className='flex justify-between'>
                        <Link to={`/admin-users`} type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 hover:bg-red-700 py-2 px-5 text-sm font-medium text-white buttonStyleCustom">
                            Regresar
                        </Link>
                        <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-teal-600 hover:bg-cyan-700 py-2 px-5 text-sm font-medium text-white buttonStyleCustom">
                            Agregar Usuario
                        </button>
                    </div>
                </div>

            </div>

        </section>
    )
}
