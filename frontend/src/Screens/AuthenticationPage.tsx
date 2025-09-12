import React from 'react'
import geometric from './../assets/images/Geometric.png'
import logo from './../assets/images/Logo.png'
import { AuthFormControl } from '../Components/AuthComponents/AuthFormControl'
import { useLocation } from 'react-router-dom'
import { UseAuthContext } from '../Context/AuthContext'


 const AuthenticationPage: React.FC = () => {
    const location = useLocation()
    const isChatBotPage:boolean= location?.pathname == "/chatbot/login" ? true: false
    const {authUserData , setAuthUserData} = UseAuthContext()
    
    console.log(authUserData)
    return (
        <main className='width-100 h-screen flex  flex-column bg-blue-color'>

            <section className='w-1/2 lg:flex justify-center items-center relative hidden md:block'>
                <div className=' m-20 absolute'>
                    <img src={geometric} alt="" className='w-full' />
                </div>
                <div className='flex flex-col items-center justify-center h-screen '>
                    <div className='w-90'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='flex flex-col text-white text-center mt-5 gap-5'>
                        <h4 className='font-bold text-2xl'>Welcome to Pragy-AI Admin</h4>
                        <p className='text-md'>Tal to your data</p>
                    </div>
                </div>
            </section>
            <AuthFormControl isChatBotPage={isChatBotPage} setAuthUserData={setAuthUserData} authUserData={authUserData}/>
        </main>
    )
}

export default AuthenticationPage