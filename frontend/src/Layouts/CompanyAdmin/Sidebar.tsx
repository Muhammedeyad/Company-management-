import React, { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

import { ProfileComponent } from '../../Components/CompanyAdmin/SidebarComponents/ProfileComponent';
import { DesktopTabViewSidebar } from '../../Components/CompanyAdmin/SidebarComponents/DesktopTabViewSidebar';
import { MobileViewSidebar } from '../../Components/CompanyAdmin/SidebarComponents/MobileViewSidebar';
import { IoExitOutline } from 'react-icons/io5';


//  16 1/4 transition-all duration-300
const Sidebar: React.FC = () => {
    const location = useLocation()
    const isTrue = location?.pathname == "/" || location.pathname == "/*" ? true : false
    const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(true)
    const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false)

    return (
        <section className='w-full  flex bg-gray-color '>
            <section className={`${isSideBarOpen ? "lg:w-90 md:w-1/2" : "w-30"} h-screen  bg-white shadow-lg hidden md:block sticky  top-0 py-5 px-5 lg:px-4  transition-all duration-300`}>
                <DesktopTabViewSidebar isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} />
                <ProfileComponent isSideBarOpen={isSideBarOpen} isProfileOpen={isProfileOpen} setIsProfileOpen={setIsProfileOpen} />
            </section>
            <div className='w-full fixed block md:hidden bottom-0 mt-1/2 z-4'>
                <MobileViewSidebar />
            </div>
            <div className={`${isSideBarOpen ? `lg:w-full ${isTrue ? "md:w-2/3 w-full" : "w-full"} ` : "lg:w-full md:w-5/6 w-full "}`}>
                <Outlet />
            </div>


            {
                isProfileOpen &&
                    <div className='bg-gray-color border-1 p-1 rounded-lg border-gray-200 w-60 fixed bottom-20 left-5'>
                        <ul className='flex flex-col gap-1'>
                            <li className='px-5 py-1 rounded-lg hover:bg-red-100 cursor-pointer'>Your Profile </li>
                            <li className='px-5 py-1 rounded-lg hover:bg-red-100 cursor-pointer'>Settings </li>
                            <Link to={'/login'} className='px-4 py-1 flex gap-2 items-center bg-red-200 text-gray-color rounded-lg'><IoExitOutline /> Sign Out </Link>
                        </ul>
                    </div>
            }
        </section>
    )
}

export default Sidebar;