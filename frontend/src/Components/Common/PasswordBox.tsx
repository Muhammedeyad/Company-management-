import React from 'react'
import type { HandleChangeProp } from '../../types/CompanyAdmin/PropTypes'

export const PasswordBox:React.FC<HandleChangeProp> = ({title, handleChange}) => {
   const newTitle:string= title == 'confirmPassword' ?'Confirm password': 'Password'
   const inputName:string= title == 'confirmPassword' ?'confirmPassword': 'password'
  return (
    <section className='flex flex-col'>
      <label htmlFor="" className='text-gray-600'>{title}</label>
      <input type="text" className='border-1 border-gray-300 w-full py-2 rounded px-3' placeholder={`Enter ${newTitle}`} name={inputName}  onChange={(e)=>handleChange(e)}/>
    </section>
  )
}
