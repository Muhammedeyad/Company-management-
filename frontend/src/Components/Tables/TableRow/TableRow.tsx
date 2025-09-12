import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { PiUpload } from "react-icons/pi";
import { HiOutlineEye } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { Button } from '../../Common/Button';
import { EnterAnimation } from '../../../Animations/EnterAnimation';
import { UseCompanyZutand } from '../../../zustand/CompanyAdminZustand';
// import type { CompanyTableColumnType, CompanyTableDataType, InstanceTableColumnType, InstanceTableDataType } from '../../../types/CompanyAdmin/TableTypes';


export const TableRow: React.FC<any> = ({ data, tableColumns }) => {
    const { setIsEdit } = UseCompanyZutand()
    function handleEdit() {
        setIsEdit({ mode: 'edit', data: [data] })
    }
  

    return (
        <tr className='hover:bg-gray-100 hover:border-x-1 ' >
            {tableColumns.map((column: any, idx: number) => (
                <td key={idx}>{column.fieldName != "status" ? data[column.fieldName] : (<EnterAnimation><p className='bg-green-200 text-green-900 px-6 capitalize  py-2 w-25 text-center rounded-full'>{data[column.fieldName]}</p></EnterAnimation>)}</td>

            ))}
            <td className='flex gap-3 items-center  mt-2 md:mt-2'>
                <label htmlFor="my-drawer-4" className="text-blue-400 cursor-pointer text-lg" onClick={() => handleEdit()} ><FaEdit /></label>
                <label htmlFor="my_modal_6" className=" text-red-400 cursor-pointer text-lg"><MdDelete /></label>
            </td>
            <td className=''>
                <div className={`flex gap-3  ${tableColumns[0]?.columnName != "Company Name" ? "justify-center" : ""}`}>
                    {tableColumns[0]?.columnName == "Company Name" ? <>
                        <Link to={'/'}><Button title='View Instances' icon={<PiUpload />} bgcolor='#F3F4F6' textcolor='blue' /></Link>

                    </> : <>
                        <Link to={'/uploaddocuments'}><Button title='Upload' icon={<PiUpload />} bgcolor='#F3F4F6' textcolor='blue' /></Link>
                        <Link to={'/viewdocument'}><Button title='View Documents' icon={<HiOutlineEye />} bgcolor='#F3F4F6' textcolor='blue' /></Link>
                    </>}


                </div>
            </td>
        </tr>
    )
}