import React, { useEffect } from 'react'
import { FiMenu } from "react-icons/fi";
import { FiUpload } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { FiDatabase } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { VscThreeBars } from "react-icons/vsc";
import { UseCompanyZutand } from '../../../zustand/CompanyAdminZustand';
import { Routes } from '../../../Constants/CompanyAdmin/Routes';


export const DesktopTabViewSidebar: React.FC<{ isSideBarOpen: boolean, setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>> }> = ({ isSideBarOpen, setIsSideBarOpen }) => {
    const { selectedTab, setSelectedTab} = UseCompanyZutand()

    const handleSetCurrentTab  = (currentTab:string)=>{
        sessionStorage.setItem("currentTab", currentTab)
        setSelectedTab(currentTab)
    }
    useEffect(()=>{
        const currentTab:string = sessionStorage.getItem("currentTab") || ""
        if(currentTab){
    setSelectedTab(currentTab)
        }
    
    }, [])

 

    return (
        <section>
            <section className={`flex ${isSideBarOpen ? "justify-between" : "justify-center"} items-center  w-full `}>
                {isSideBarOpen && <Link to={Routes.INSTANCES} className='font-bold text-lg lg:text-xl cursor-pointer' >Pragya-AI Admin</Link>}
                <span className='font-bold text-2xl cursor-pointer' onClick={() => setIsSideBarOpen(!isSideBarOpen)}><FiMenu /></span>
            </section>
            <section className='mt-10 flex flex-col gap-6'>
                <section>
                    {isSideBarOpen && <p className='text-gray-600 '>Document Management</p>}
                    <ul className='px-4'>
                        <Link to={Routes.DOCUMENTS} className={`flex items-center gap-3 hover:bg-blue-50 py-3 ${isSideBarOpen ? "lg:px-6" : ""} px-3  rounded mt-1 cursor-pointer   ${selectedTab == 'uploaddocuments' ? "bg-blue-200 text-blue-600": ""} `} onClick={()=> handleSetCurrentTab("uploaddocuments")}> <FiUpload size={isSideBarOpen ? 0 : 20} />{isSideBarOpen && 'documents'}</Link>
                    </ul>
                </section>
                <section >
                    {isSideBarOpen && <p className='text-gray-600'>System Management</p>}
                    <ul className='px-4 '>
                        <Link to={Routes.COMAPANY} className={`flex items-center gap-3  py-2 px-3 ${isSideBarOpen ? "lg:px-6" : ""} hover:bg-blue-50 rounded mt-1 cursor-pointer ${selectedTab == 'instances' ? "bg-blue-200 text-blue-600": ""}` } onClick={()=> handleSetCurrentTab("instances")}><VscThreeBars size={isSideBarOpen ? 0 : 20}  />{isSideBarOpen && 'Instances'}</Link>
                        <Link to={Routes.REGISTER} className={`flex items-center gap-3  py-2 px-3 hover:bg-blue-50 ${isSideBarOpen ? "lg:px-6" : ""}  rounded mt-1 cursor-pointer ${selectedTab == 'register' ? "bg-blue-200 text-blue-600": ""}`} onClick={()=> handleSetCurrentTab("register")}><FiUserPlus size={isSideBarOpen ? 0 : 20}  />{isSideBarOpen && 'Register User'}</Link>
                    </ul>
                </section>
                <section>
                    {isSideBarOpen && <p className='text-gray-600'>Configuration</p>}
                    <ul className='px-4'>
                        <span className={`flex items-center gap-3  py-2 px-3 hover:bg-blue-50 ${isSideBarOpen ? "lg:px-6" : ""} rounded mt-1 cursor-pointer `}><IoSettingsOutline size={isSideBarOpen ? 0 : 20} />{isSideBarOpen && 'Settings'}</span>
                        <span className={`flex items-center gap-3  py-2 px-3 hover:bg-blue-50 ${isSideBarOpen ? "lg:px-6" : ""}  rounded mt-1 cursor-pointer `}><FiDatabase size={isSideBarOpen ? 0 : 20} />{isSideBarOpen && 'Database'}</span>
                    </ul>
                </section>
            </section>

        </section>
    )
}
