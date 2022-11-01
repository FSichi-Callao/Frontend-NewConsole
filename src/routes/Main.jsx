import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { Header } from '../components/Header/Header';

/* PAGES */
import { StartPage } from '../pages/StartPage/StartPage';
import { OperationList } from '../pages/AgencyAdmin/OperationList/OperationList';
import { UserList } from '../pages/AgencyAdmin/UserList/UserList';
import { Reports } from '../pages/Reports/Reports';
import { TypeOfOperations } from '../pages/Statistics/TypeOfOperations';
import { TotalByDay } from '../pages/Statistics/TotalByDay';
import { Alarms } from '../pages/SystemConfig/Alarms';
import { Currencies } from '../pages/SystemConfig/Currencies';
import { Operations } from '../pages/SystemConfig/Operations';
import { TypeAccountsList } from '../pages/SystemConfig/TypeAccountsList';
import { Profiles } from '../pages/ConsoleUserAdmin/Profiles/Profiles';
import { Users } from '../pages/ConsoleUserAdmin/Users/Users';
import { AddUser } from '../pages/ConsoleUserAdmin/Users/AddUser';
import { AddProfile } from '../pages/ConsoleUserAdmin/Profiles/AddProfile';
import { EditUser } from '../pages/ConsoleUserAdmin/Users/EditUser';
import { EditProfile } from '../pages/ConsoleUserAdmin/Profiles/EditProfile';

export const Main = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleOpenSidebar = (id) => {
        (id === 1) ? setIsSidebarOpen(!isSidebarOpen) : setIsSidebarOpen(true);
    }

    return (
        <BrowserRouter>

            <Sidebar valueOpen={isSidebarOpen} handleOpen={handleOpenSidebar} />

            <section className="home-section">

                <Header handleOpenSidebar={handleOpenSidebar} />

                <div className='page-content'>
                    <Routes>
                        <Route path='/' element={<StartPage />}></Route>
                        <Route exact path='/list-legajo' element={<UserList />} />
                        <Route exact path='/list-transaction' element={<OperationList />} />
                        <Route exact path='/report-daily-new-accounts' element={<Reports />} />
                        <Route exact path='/chart-type-operations' element={<TypeOfOperations />} />
                        <Route exact path='/chart-total-by-day' element={<TotalByDay />} />

                        {/* Console User Manager */}

                        <Route exact path='/admin-profiles' element={<Profiles />} />
                        <Route exact path='/profile' element={<AddProfile />} />
                        <Route exact path='/profile/:id' element={<EditProfile />} />

                        <Route exact path='/admin-users' element={<Users />} />
                        <Route exact path='/user' element={<AddUser />} />
                        <Route exact path='/user/:id' element={<EditUser />} />

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
