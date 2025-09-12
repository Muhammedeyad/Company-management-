import React, { useEffect, useRef } from 'react'
import { EmailAddress } from '../../Common/EmailAddress'
import { PasswordBox } from '../../Common/PasswordBox'
import { Button } from '../../Common/Button'
import { FaPlus } from 'react-icons/fa'
// import type { HandleChangeProp } from '../../../types/CompanyAdmin/PropTypes'

export const FormControl: React.FC<{ handleChange: any, handleSubmit: any }> = ({ handleChange, handleSubmit }) => {
  const refName = useRef<HTMLInputElement | null>(null)
  useEffect(() => {
    refName.current?.focus();
  }, [])
  return <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col gap-5 py-6 ' >
    <section className='flex w-full gap-5 flex-col lg:flex-row'>
      <div className='flex flex-col w-full'>
        <label htmlFor="" className='text-gray-600'>First Name</label>
        <input type="text" className='border-1 border-gray-300 w-full py-2 rounded px-3' placeholder='Enter First Name' name='firstName' onKeyDown={(e) => handleChange(e)} ref={refName} />
      </div>
      <div className='flex flex-col w-full'>
        <label htmlFor="" className='text-gray-600'>Last Name</label>
        <input type="text" className='border-1 border-gray-300 w-full py-2 rounded px-3' placeholder='Enter Last Name' name='lastName' onKeyDown={(e) => handleChange(e)} />
      </div>
    </section>
    <section className='flex flex-col'>
      <label htmlFor="" className='text-gray-600'>User Role</label>
      <select id=" " defaultValue={"Select Status"} className='border-1 border-gray-300 w-full py-2 rounded px-3' name='userRole' onKeyDown={(e) => handleChange(e)} >
        <option value="Select Status" className='text-gray-600' disabled hidden>Select Status</option>
        <option value="Company Admin">Company Admin</option>
        <option value="Super Admin">Super Admin</option>
      </select>
    </section>
    <EmailAddress handleChange={handleChange} />
    <PasswordBox title={"password"} handleChange={handleChange} />
    <PasswordBox title={"confirmPassword"} handleChange={handleChange} />
    <Button title='Create User' icon={<FaPlus/>} bgcolor='#5445F9' textcommoncolor='white' width="full" mt={3}/>
  </form>
}
