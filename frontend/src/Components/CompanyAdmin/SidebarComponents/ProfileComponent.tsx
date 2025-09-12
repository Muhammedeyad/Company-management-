import type { ProfileTypes } from "../../../types/CompanyAdmin/PropTypes";
import { PiUserCircleLight } from "react-icons/pi";

export const ProfileComponent: React.FC<ProfileTypes> = ({ isSideBarOpen, isProfileOpen, setIsProfileOpen }) => {
    

    return (
        <>
            <section className='absolute fab bottom-0 md:left-8 left-0 flex items-center gap-4 py-2 cursor-pointer border-t-1 border-gray-200 backdrop-blur' onClick={() => setIsProfileOpen(!isProfileOpen)}>
                <section className=''>
                    <PiUserCircleLight size={40} />
                </section>
                {isSideBarOpen && <>
                    <section>
                        <h4 className='text-black select-none'>Welcome</h4>
                        <p className='text-gray-600 text-md select-none'>company@gmail.com</p>
                    </section>
                </>
                }
            </section>
        </>

    )
}
