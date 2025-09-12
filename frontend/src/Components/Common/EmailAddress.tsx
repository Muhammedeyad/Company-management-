import React from 'react'
import type { HandleChangeProp } from '../../types/CompanyAdmin/PropTypes'
export const EmailAddress:React.FC<HandleChangeProp> = ({handleChange}) => {
  return (
<section className='flex flex-col'>
      <label htmlFor="" className='text-gray-600'>Email Address</label>
      <input type="text" className='border-1 border-gray-300 w-full py-2 rounded px-3' placeholder='Enter Email Address' name='email' onChange={(e)=>handleChange(e)} />
    </section>
  )
}
