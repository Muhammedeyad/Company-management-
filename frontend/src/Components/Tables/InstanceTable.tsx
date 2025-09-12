import React from 'react'
import { TableRow } from './TableRow/TableRow'
import type { CompanyTablePropType, InstanceTablePropType } from '../../types/CompanyAdmin/TableTypes'


export const InstanceTable: React.FC<CompanyTablePropType | InstanceTablePropType> = ({ tableColumns, tableData }) => {


    return <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 md:mb-0 mb-20">
        <table className="table">
            {/* head */}
            <thead>
                <tr className='uppercase bg-gray-color '>
                    {tableColumns?.map((column, idx) => (
                        <th key={idx}>{column.columnName}</th>
                    ))}
                    <th>Action</th>
                    <th className='md:justify-center  md:w-1/4'>Data</th>
                </tr>
            </thead>
            <tbody>
                {
                    tableData.map((row, idx) => (
                        <TableRow key={idx} data={row} tableColumns={tableColumns} />
                    ))
                }

            </tbody>
        </table>
    </div>
}
