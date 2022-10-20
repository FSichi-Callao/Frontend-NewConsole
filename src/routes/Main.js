import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SidebarDrop } from '../components/SidebarDrop/SidebarDrop';
import { Header } from '../components/Header/Header';
import '../App.css'
/* PAGES */
import { Dashboard } from '../pages/Dashboard';
import { TypeOfOperations } from '../pages/TypeOfOperations';
import { TotalByDay } from '../pages/TotalByDay';
import { Alarms } from '../pages/SystemConfig/Alarms';
import { Currencies } from '../pages/SystemConfig/Currencies';
import { Operations } from '../pages/SystemConfig/Operations';
import { TypeAccountsList } from '../pages/SystemConfig/TypeAccountsList';
import { UserList } from '../pages/AgencyAdmin/UserList';
import { OperationList } from '../pages/AgencyAdmin/OperationList';
import { Reports } from '../pages/Reports/Reports';
import { Profiles } from '../pages/ConsoleUsersAdmin/Profiles/Profiles';
import { Users } from '../pages/ConsoleUsersAdmin/Users/Users';
import { AddUser } from '../pages/ConsoleUsersAdmin/Users/AddUser';


export const Main = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleOpenSidebar = (id) => {
        (id === 1) ? setIsSidebarOpen(!isSidebarOpen) : setIsSidebarOpen(true);
    }

    return (
        <BrowserRouter>

            <SidebarDrop valueOpen={isSidebarOpen} handleOpen={handleOpenSidebar} />

            <section className="home-section">

                <Header handleOpenSidebar={handleOpenSidebar} />

                <div className='page-content'>
                    <Routes>
                        <Route path='/' element={<Dashboard />}></Route>
                        <Route exact path='/list-legajo' element={<UserList />} />
                        <Route exact path='/list-transaction' element={<OperationList />} />
                        <Route exact path='/report-daily-new-accounts' element={<Reports />} />
                        <Route exact path='/chart-type-operations' element={<TypeOfOperations />} />
                        <Route exact path='/chart-total-by-day' element={<TotalByDay />} />

                        {/* Console User Manager */}

                        <Route exact path='/admin-profiles' element={<Profiles />} />
                        <Route exact path='/admin-users' element={<Users />} />
                        <Route exact path='/user' element={<AddUser />} />

                        {/* System Config */}

                        <Route exact path='/list-transaction-alarm' element={<Alarms />} />
                        <Route exact path='/currencies' element={<Currencies />} />
                        <Route exact path='/rules' element={<Operations />} />
                        <Route exact path='/type-accounts' element={<TypeAccountsList />} />



                    </Routes>
                </div>

            </section>

        </BrowserRouter>
    )
}