import React from 'react'

export const DeletePopUp: React.FC = () => {
    return (
        <>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <div >
                        <h3 className='font-bold text-xl'>Delete Confirmation</h3>
                        <p className='mt-3'>Are you sure you want to delete this company? This will also delete all associated instances.</p>
                    </div>
                     <div className="modal-action">
                         <label htmlFor="my_modal_6" className="btn border-1 border-gray-500 px-8">Cancel</label>
                        <button className='btn bg-blue-color text-white px-8'>Confirm</button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
