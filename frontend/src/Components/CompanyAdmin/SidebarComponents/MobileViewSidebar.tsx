import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { FiDatabase, FiUserPlus } from "react-icons/fi";
import { FiUpload } from "react-icons/fi";
import { VscThreeBars } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { Routes } from '../../../Constants/CompanyAdmin/Routes';

export const MobileViewSidebar: React.FC = () => {
    return (
        <ul className="menu menu-horizontal bg-base-200 rounded-box mt-6 w-full flex justify-around py-6 ">
            <li className=''>
                <Link to={Routes.DOCUMENTS} className="tooltip" data-tip="Documents">
               <FiUpload size={20}/>
                </Link>
            </li>
            <li>
                <Link to={Routes.COMAPANY} className="tooltip" data-tip="Instances">
                    <VscThreeBars size={20}/>
                </Link>
            </li>
            <li>
                <Link to={Routes.REGISTER} className="tooltip" data-tip="Register User">
                   <FiUserPlus size={20}/>
                </Link>
            </li>
            <li>
                <Link to={'/'} className="tooltip" data-tip="Settings">
                  <FiDatabase size={20}/>
                </Link>
            </li>
            <li>
                <a className="tooltip" data-tip="Database">
                 <IoSettingsOutline size={20}/>
                </a>
            </li>
        </ul>
    )
}
