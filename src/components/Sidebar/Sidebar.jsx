import { useState } from 'react'
import { sidebarRoutes } from '../../routes/Sidebar';
import { LinksWithDropDown, LinksWithoutDropDown } from './LinksComponent';
import { getRoutesOrderForMenu } from './utils';
import './sidebarStyles.css'

export const Sidebar = ({ valueOpen, handleOpen }) => {

    const [routesValue, setRoutesValue] = useState(sidebarRoutes);

    const handleClickMenu = (id) => {
        var updateValue = getRoutesOrderForMenu(id, routesValue);
        setRoutesValue(updateValue);
    }

    return (
        <div className={valueOpen ? 'sidebar' : 'sidebar close'} >
            <div className="logo-details">
                <i className='bx bxl-c-plus-plus'></i>
                <div className="logo_img">
                    {
                        (valueOpen)
                            ? <img src={require("./img/logo3.png")} alt="" className='logo_img_open' />
                            : <img src={require("./img/logo4.png")} alt="" className='logo_img_close' />
                    }
                </div>
            </div>
            <ul className="nav-links" onClick={() => { handleOpen(2) }}>
                {routesValue.map((route, index) => (
                    (!route.dropdown)
                        ? <LinksWithoutDropDown route={route} />
                        : <LinksWithDropDown route={route} indexMenu={index} onHandleMenu={handleClickMenu} />
                ))}
            </ul>

            <div className="profile-details">
                <div className="profile-content">
                    <img src={require("../Sidebar/img/profile.jpg")} alt="" />
                </div>
                <div className="name-job">
                    <div className="profile_name">adminpaas2</div>
                    <div className="job">SysAdmin</div>
                </div>
                <i className='btn btn-outline-light bx bx-log-out'></i>
            </div>

        </div>
    )
}