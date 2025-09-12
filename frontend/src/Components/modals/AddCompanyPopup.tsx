import React from 'react'
import { FaPlus } from "react-icons/fa";
import { UseCompanyZutand } from '../../zustand/CompanyAdminZustand';

export const AddCompanyPopup: React.FC<{ title: string }> = ({ title }) => {

    const { isEdit } = UseCompanyZutand()
    return <div className=" drawer-end m-0 p-0 z-6">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
        </div>
        <div className="drawer-side">
            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className=" bg-base-200 min-h-full w-90 relative">
                {/* Sidebar content here */}
                <section className='m-0 bg-blue-600 w-full py-5 px-4 text-white font-bold'>
                    <h1 className='text-lg'>{isEdit.mode == 'edit'? title: 'Add Company'}</h1>
                </section>
                <section className='w-full flex justify-center flex-col'>
                    <section className='py-1 px-2 flex flex-col gap-6 mt-10'>
                        <section className='flex flex-col gap-1'>
                            <label htmlFor="" className='text-gray-600'>Company name</label>
                            <input type="text" placeholder="Enter company name" className="input" />
                        </section>
                        <section className='flex flex-col gap-1'>
                            <label htmlFor="" className='text-gray-600'>Company Description</label> 
                            <textarea name="" id="" className='textarea' placeholder='Enter description'></textarea>
                        </section>
                        <section className='flex flex-col gap-1'>
                            <label htmlFor="" className='text-gray-600'>Status</label>
                            <select name="" id="" className=' input cursor-pointer'>
                                <option value="" selected hidden>Select Status</option>
                                <option value="">Active</option>
                                <option value="">In Active</option>
                            </select>
                        </section>

                    </section>
                    <section className='flex  absolute bottom-4 right-6 gap-3'>
                        <label className='btn w-1/2 border-1 border-gray-600' htmlFor="my-drawer-4" aria-label="close sidebar">Cancel</label>
                        <button className='btn w-1/2 btn-primary'><FaPlus />{title == "Edit Company" ? "Update" : 'Create'}</button>
                    </section>
                </section>
            </ul>
        </div>
    </div>
}
