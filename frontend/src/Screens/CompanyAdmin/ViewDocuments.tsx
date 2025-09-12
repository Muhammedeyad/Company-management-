import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

 const ViewDocuments: React.FC = () => {
  const navigate = useNavigate()

  const goBack= ()=>{
    navigate(-1)
  }

  return (
    <section className='w-full md:px-5 py-3 p-3 h-screen '>
      <section className='bg-white h-full p-10 rounded-xl'>
        <section className='flex gap-3 items-center'>
          <span className='cursor-pointer' onClick={()=> goBack()}><IoMdArrowBack size={20}/></span>
          <h4 className='text-xl font-bold'>Documents</h4>
        </section>
        <ul className='mt-4 px-10'>
          <p className='text-red-600 text-center'>no documents found!</p>
        </ul>
      </section>
    </section>
  )
}

export default ViewDocuments