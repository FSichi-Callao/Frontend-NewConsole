import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { BackButton } from '../../../components/Buttons/BackButton';
import { SaveButton } from '../../../components/Buttons/SaveButton';
import { TextInput } from '../../../components/Inputs';
import { PageTitles } from '../../../components/PageSections';
import { TablePermissions } from '../../../components/Table/TablePermissions';
import { listOfProfiles } from './data'

export const EditProfile = () => {

    const { id } = useParams();
    const [profile, setProfile] = useState({});
    const [loadState, setLoadState] = useState(false);

    /* STATES FOR THE INPUTS AND DATA PERMISSIONS */

    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');

    const [agencyAdminData, setAgencyAdminData] = useState([]);
    const [accountAdminData, setAccountAdminData] = useState([]);
    const [reportsData, setReportsData] = useState([]);
    const [statisticsData, setStatisticsData] = useState([]);
    const [usersAdminData, setUsersAdminData] = useState([]);
    const [systemConfigData, setSystemConfigData] = useState([]);
    const [initData, setInitData] = useState([]);

    useEffect(() => {
        // eslint-disable-next-line eqeqeq
        setProfile(listOfProfiles.find(profile => profile.id == id));
        setUserName(profile.profile);
        setUserDescription(profile.description);

        setLoadState(true);

        if (loadState) {
            setAgencyAdminData(profile.options.agencyAdmin);
            setAccountAdminData(profile.options.accountAdmin);
            setReportsData(profile.options.reports);
            setStatisticsData(profile.options.statistics);
            setUsersAdminData(profile.options.usersAdmin);
            setSystemConfigData(profile.options.systemConfig);
            setInitData(profile.options.init);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, loadState]);

    return (
        <section className='p-4'>
            <PageTitles title={'Administración de usuarios'} subtitle={'Editar Perfil'} color={'text-red-600'} />

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