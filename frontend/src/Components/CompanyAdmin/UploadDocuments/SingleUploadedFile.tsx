import React from 'react'
import { FaFilePdf } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoEye } from "react-icons/io5";
import type { SingleUploadFuncType } from '../../../types/CompanyAdmin/PropTypes';
import { MdDelete } from "react-icons/md";

export const SingleUploadedFile: React.FC<SingleUploadFuncType> = ({ file, isUploadPage, deleteSelectedFile, files, setFiles }) => {

    return <section className='cursor-pointer mt-3  border-b-2 border-gray-300'>
        <div className='bg-white p-3 rounded flex justify-between'>
            <div className='flex items-center gap-5'>
                <div>
                    <h1 className='text-2xl'><FaFilePdf color='blue'/></h1>
                </div>
                <div>
                    <h4>{file?.name}</h4>
                    <div>
                        <p>{file?.size}.kb @{file?.type}</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center gap-3'>
                {isUploadPage ? <>
                    <button className='flex  items-center btn rounded bg-violet-color text-white'><IoEye />View</button>
                    <p><BsThreeDotsVertical /></p>
                </> : <button className='cursor-pointer' onClick={()=> deleteSelectedFile({id: file?.lastModified, files, setFiles})}><MdDelete size={22} color={'gray'} /></button>}

            </div>
        
        </div>
    </section>
}
