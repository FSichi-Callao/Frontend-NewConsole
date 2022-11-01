import React, { useState } from 'react'
import { BackButton } from '../../../components/Buttons/BackButton';
import { SaveButton } from '../../../components/Buttons/SaveButton';
import { TextInput } from '../../../components/Inputs';
import { PageTitles } from '../../../components/PageSections'
import { TablePermissions } from '../../../components/Table/TablePermissions';
import { accountAdminOptions, agencyAdminOptions, initOptions, reportsOptions, statisticsOptions, systemConfigOptions, usersAdminOptions } from './data';

export const AddProfile = () => {

    /* STATES FOR THE INPUTS */

    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');

    /* STATES FOR THE DATA FOR TABLES */

    const [agencyAdminData, setAgencyAdminData] = useState(agencyAdminOptions);
    const [accountAdminData, setAccountAdminData] = useState(accountAdminOptions);
    const [reportsData, setReportsData] = useState(reportsOptions);
    const [statisticsData, setStatisticsData] = useState(statisticsOptions);
    const [usersAdminData, setUsersAdminData] = useState(usersAdminOptions);
    const [systemConfigData, setSystemConfigData] = useState(systemConfigOptions);
    const [initData, setInitData] = useState(initOptions);

    return (
        <section className='p-4'>
            <PageTitles title={'Administración de usuarios'} subtitle={'Nuevo Perfil'} color={'text-red-600'} />

            <BackButton route={'../admin-profiles'} />

            <div className='bg-gray-800 mt-6 rounded-lg'>
                <div className='row p-3'>
                    <div className='col-6'>
                        <TextInput inputTitle={'Nombre del Perfil'} value={userName} setValue={setUserName} inputName={'userName'} col={12} />
                    </div>
                    <div className='col-6'>
                        <TextInput inputTitle={'Descripcion del Perfil'} value={userDescription} setValue={setUserDescription} inputName={'userDescription'} col={12} />
                    </div>
                </div>
            </div>

            <h1 className='text-center mt-4 text-xl font-semibold'>Permisos</h1>

            <section className='bg-gray-800 mt-6 rounded-md p-3'>
                <div className='row'>
                    <div className='col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                        <TablePermissions title={'ADMIN DE ORGANISMO'} data={agencyAdminData} setData={setAgencyAdminData} />
                        <TablePermissions title={'ADMIN DE CUENTAS'} data={accountAdminData} setData={setAccountAdminData} />
                        <TablePermissions title={'REPORTES'} data={reportsData} setData={setReportsData} />
                        <TablePermissions title={'ESTADÍSTICAS'} data={statisticsData} setData={setStatisticsData} />
                        <TablePermissions title={'ADMIN USUARIOS CONSOLA'} data={usersAdminData} setData={setUsersAdminData} />
                    </div>
                    <div className='col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                        <TablePermissions title={'CONFIGURACIÓN DEL SISTEMA'} data={systemConfigData} setData={setSystemConfigData} />
                        <TablePermissions title={'INICIO'} data={initData} setData={setInitData} />
                    </div>
                </div>
            </section>

            <SaveButton />

        </section>
    )
}