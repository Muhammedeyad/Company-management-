import React, { useState } from 'react'
import { FormControl } from '../../Components/AuthComponents/RegisterPageComponent/FormControl'
import { UseRegisterHook } from '../../hooks/CompanyAdmin/AuthHooks/UseRegisterHook'
import type { RegisterUserType } from '../../types/CompanyAdmin/PropTypes'


 const RegisterNewUserPage: React.FC = () => {
  const [registerUser, setRegisterUser] = useState<RegisterUserType>({
    firstName: "",
    lastName: "",
    userRole: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
 
  const handleChange =(e:React.ChangeEvent<HTMLSelectElement>)=> {
    const {value, name} = e.target
    setRegisterUser({ ...registerUser, [name]: value })
  }
  const {mutation} = UseRegisterHook()
  const handleSubmit =(e:any)=>{
    e.preventDefault()
    mutation.mutate(registerUser)
  }

  return (
    <main className=' flex justify-center md:h-screen md:items-center p-3'>
      <div className='flex lg:my-4 flex-col  shadow-lg rounded-lg p-6 bg-white w-full mx-1 md:mx-0 lg:w-2/3 md:my-0 mb-20'>
        <h4 className='font-bold text-xl'>Register New User</h4>
        <p>Create a new user account in the system </p>
        <FormControl handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
    </main>
  )
}

export default RegisterNewUserPage