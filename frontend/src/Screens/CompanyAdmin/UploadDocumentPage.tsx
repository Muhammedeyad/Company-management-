import React, { useEffect, useRef, useState } from 'react'
import { CompanyHeader } from '../../Layouts/CompanyAdmin/Header';
import { FileUploadComponent } from '../../Components/CompanyAdmin/UploadDocuments/FileUploadComponent';
import { SingleUploadedFile } from '../../Components/CompanyAdmin/UploadDocuments/SingleUploadedFile';
import { FaPlus } from 'react-icons/fa';
import { UploadDocumentFeatures } from './../../features/CompanyAdmin/UploadDocumentFeatures'
import type { FileType } from '../../types/CompanyAdmin/PropTypes';
import { Button } from '../../Components/Common/Button';
import { EnterAnimation } from '../../Animations/EnterAnimation';
import { uploadDocuments } from '../../features/CompanyAdmin/UploadDocument/UploadDocumentSlice';
import { UseDispatchHook, UseSelectorHook } from '../../hooks/CompanyAdmin/ReduxStoreHook/ReduxStoreHook';


const UploadDocumentPage: React.FC = () => {
    const [files, setFiles] = useState<FileType[]>([])    //uploaded files 
    const [uploadedFiles, setUploadedFiles] = useState<FileType[]>([])
    const { clearAllFiles, deleteSelectedFile } = UploadDocumentFeatures()
    const companyRef = useRef<HTMLInputElement | null>(null)
    const dispatch = UseDispatchHook()
    const data = UseSelectorHook((state: { document: FileType[] }) => state.document)


    useEffect(() => {
        companyRef.current?.focus()
        setUploadedFiles(data)
    }, [data])

    const handleUpload = () => {
        dispatch(uploadDocuments({ files }))
        setFiles([])

    }

    return (
        <main className='w-full md:px-5 py-3'>
            <CompanyHeader currentPage={undefined} title='Upload Documents' />
            <section className='bg-white m-3 md:mx-0 mt-4 px-5 py-8 rounded shadow'>
                <h4 className=' text-xl font-normal'>Upload Settings</h4>
                <section className='flex flex-col lg:flex-row w-full gap-6 mt-5'>
                    <section className='flex flex-col gap-1 w-full'>
                        <label htmlFor="" className='text-gray-600 py-1'  >Company Name</label>

                        <input type="text" placeholder='Enter company name' className='w-full border-1 border-gray-300 px-3 py-2 rounded' ref={companyRef} />
                    </section>
                    <section className='flex flex-col gap-1 w-full'>
                        <label htmlFor="" className='text-gray-600 py-1'>Instance Name</label>
                        <input type="text" placeholder='Enter instance name' className='w-full border-1 border-gray-300 px-3 py-2 rounded' />
                    </section>
                </section>
            </section>
            {/* File Uploading Component */}
            <EnterAnimation>
                <FileUploadComponent setFiles={setFiles} files={files} />
            </EnterAnimation>
            {/* document footer */}
            <section className='m-3 mb-20 md:m-0 p-3 py-8'>
                <section>
                    <h4 className='font-bold text-xl'>{files?.length > 0 ? `Selected files (${files?.length})` : "Recently Uploaded Files"}</h4>
                    {files?.length > 0 ? <>  {files?.map((file, idx) => (
                        <EnterAnimation><SingleUploadedFile file={file} key={idx} deleteSelectedFile={deleteSelectedFile} files={files} setFiles={setFiles} /></EnterAnimation>
                    ))
                    }
                    </> : uploadedFiles?.length > 0 ?
                        uploadedFiles?.map((file, idx) => (
                            <EnterAnimation><SingleUploadedFile file={file} key={idx} isUploadPage={true} /></EnterAnimation>
                        ))

                        : <p className='text-center text-red-400'>No uploaded files found</p>
                    }
                </section>
                {files?.length > 0 && <section className='mt-10 flex justify-end gap-3'>
                    <Button title='Clear all' bgcolor='white border-1 ' customCSS='border-1 border-gray-600' onClick={() => clearAllFiles({ setFiles })} />
                    <Button title='Upload to Company' bgcolor='#5445F9' textcommoncolor='white' icon={<FaPlus />} customCSS='border-1 border-gray-600' onClick={handleUpload} />
                </section>}

            </section>
        </main>
    )
}

export default UploadDocumentPage