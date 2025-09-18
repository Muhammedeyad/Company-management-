import React, { useEffect, useRef } from 'react'
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { EnterAnimation } from '../../Animations/EnterAnimation';
import { UseCompanyZutand } from '../../zustand/CompanyAdminZustand';

export const CompanyHeader: React.FC<{ currentPage: string | undefined, title: string | undefined, filterTableData: (e: React.ChangeEvent<HTMLInputElement>) => void, searchText: string }> = ({ currentPage, title, filterTableData, searchText }) => {
    const { isEdit, setIsEdit } = UseCompanyZutand()
    const navigate = useNavigate()
    const goBackCompany = () => {
        navigate("/companies")
    }
    const searchRef = useRef<HTMLInputElement | null>(null)
    useEffect(() => {
        searchRef.current?.focus()
    }, [])

    const handleAdd = () => {
        setIsEdit({ mode: "add", data: [] })
    }
    

    return <section className={`bg-white p-3 sticky top-0 z-1  ${title != "Upload Documents" ? "py-5" : "py-3"} rounded`}>
        <section className='flex gap-3 items-center justify-between'>
            <div className='flex gap-2 justify-center items-center'>
                {title != "Upload Documents" && title != "Companies" && <p onClick={() => goBackCompany()} className='cursor-pointer'><IoArrowBackSharp /></p>}
                <h4 className='text-black  text-xl font-bold'>{title || "Instance for company"}</h4>
            </div>
            <div>
                <EnterAnimation>{currentPage == 'CompaniesPage' ? <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary" onClick={handleAdd}>Add Company</label>: <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary" onClick={handleAdd}>Add Instance</label>}</EnterAnimation>
            </div>
        </section>
        <section className='w-full mt-3'>
            <div className='w-full'>
                {/* input button from daisy ui */}
                {title != "Upload Documents" && <label className="input w-full">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder={title == "Companies" ? "Search company name" : "Search instances..."} ref={searchRef} onChange={(e) => filterTableData(e)} value={searchText} />
                </label>}
            </div>
        </section>
    </section>
}
