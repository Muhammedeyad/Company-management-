import React, { useRef } from 'react'
import upload from './../../../assets/images/upload.png'

export const FileUploadComponent: React.FC<any> = ({setFiles, files}) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null)
    
    const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
             const file = Array.from(e.target.files)
             setFiles([...files, file[0]])
    }
    return <section onClick={() => fileInputRef.current?.click()} className='border-1 border-dashed border-gray-600 m-3 lg:m-0  mt-6 p-3 py-8 rounded shadow cursor-pointer hover:bg-gray-50 transition-transform duration-300 ' >
        <div className=''>
            <div className='flex justify-center items-center w-full  flex-col gap-3'>
                <div className=''>
                    <img src={upload} alt="" />
                </div>
                <h4 className='text-black  text-2xl font-sans'>Drop file to upload</h4>
                <p className=''><span className='text-blue-600'>Click to Browse </span> or drag and drop</p>
                <p className='text-gray-600'>PDF file upto 50mb</p>
                <input ref={fileInputRef} type="file" className='hidden' onChange={(e) =>handleFileChange(e)} />
            </div>
        </div>
    </section>
}
