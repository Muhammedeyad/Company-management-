import React from 'react'
import { FaGoogle, FaGripLines } from "react-icons/fa";
import { BsMicrosoft } from "react-icons/bs";
import { Link } from 'react-router-dom';
import type { FormControlTypes } from '../../types/CompanyAdmin/PropTypes';
import { EmailIcon } from '../MyIcons/EmailIcon';
import { PasswordIcon } from '../MyIcons/PasswordIcon';



export const AuthFormControl: React.FC<FormControlTypes> = ({ isChatBotPage, setAuthUserData, authUserData}) => {
    const handleAuthForm = (e: React.ChangeEvent<HTMLInputElement>) => {
            const {value, name} = e.target
            setAuthUserData({...authUserData, [name]: value})
    }

    return (
        <section className='w-full md:w-1/2 bg-white flex flex-col justify-center items-center'>
            <section className='py-6 w-3/4'>
                <div className='gap-3 py-3 mb-8 flex flex-col'>
                    <h4 className='font-bold text-3xl  text-center  '>Sign in to your account</h4>
                    <p className='text-center text-gray-600'><span>or  </span><span className='text-blue-500 font-bold cursor-pointer'>Create a new account</span></p>
                </div>
                {/* Email Address */}
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="" className='text-gray-600 text-sm'>Email Address</label>
                        <label className="input validator w-full">
                           <EmailIcon/>
                            <input
                                type="text"
                                required
                                placeholder="Username"
                                name='username'
                                onChange={(e) => handleAuthForm(e)}
                            />
                        </label>
                    </div>
                    {/* password */}
                    <div className='flex flex-col w-full'>
                        <label htmlFor="" className='text-gray-600 text-sm mb-2'>Password</label>
                        <label className="input validator w-full">
                            <PasswordIcon/>
                            <input
                                type="password"
                                required
                                placeholder="Password"
                                name='password'
                                onChange={(e) => handleAuthForm(e)}
                            />
                        </label>
                    </div>
                    {/* Instance name */}
                    {isChatBotPage && <div className='flex flex-col w-full'>
                        <label htmlFor="" className='text-gray-600 text-sm mb-2'>Instance Name</label>
                        <label className="input validator w-full">
                            <FaGripLines color='gray' size={15} />
                            <input
                                type="text"
                                required
                                placeholder="Instance Name"
                                name='instanceName'
                                onChange={(e) => handleAuthForm(e)}
                            />
                        </label>
                    </div>}
                    <div className='flex justify-between  gap-3 text-gray-600 mt-10'>
                        <p className='text-sm'><input type="checkbox" />  Remember my email</p>
                        <p className='text-sm text-blue-500 font-bold cursor-pointer'>Forget password</p>
                    </div>
                </div>
                <Link to={isChatBotPage ? "/chatbot": "/"} className="btn bg-blue-color px-3 text-white  mt-4 w-full">SIgn in</Link>
                <div className='flex mt-10 gap-4 justify-center'>
                    <button className='btn  shadow-lg w-1/2 text-blue-600 border-1 border-blue-400'><FaGoogle /> Google</button>
                    <button className='btn  shadow-lg w-1/2 border-1 border-blue-500'><BsMicrosoft />Microsoft</button>
                </div>
            </section>
        </section>
    )
}
