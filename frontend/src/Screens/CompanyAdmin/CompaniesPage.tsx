import React, { useState } from 'react'
import { CompanyHeader } from '../../Layouts/CompanyAdmin/Header'
import { AddCompanyPopup } from '../../Components/modals/AddCompanyPopup'
import { InstanceTable } from '../../Components/Tables/InstanceTable'
import { DeletePopUp } from '../../Components/modals/DeletePopUp'
import type { CompanyTableColumnType, CompanyTableDataType } from '../../types/CompanyAdmin/TableTypes'
import { TableFilteration } from '../../features/CompanyAdmin/CommonTableFilteration/TableFilteration'


const CompaniesPage: React.FC = () => {
    const [searchText, setSearchText] = useState<string>("")
    const tableOneColumns: CompanyTableColumnType[] = [
        { columnName: "Company Name", fieldName: 'companyName' },
        { columnName: "Description", fieldName: 'description' },
        { columnName: "Status", fieldName: 'status' },
    ]

    const [tableOneData, setTableOneData] = useState<CompanyTableDataType[]>([
        { companyName: "XYC Corporation", description: 'Digital solutions for company specilzation in software developement', status: 'Active' },
        { companyName: "MAX Corporation", description: 'Digital solutions for company specilzation in software developement', status: 'Active' },
        { companyName: "RAX Corporation", description: 'Digital solutions for company specilzation in software developement', status: 'Active' },
        { companyName: "CAT Corporation", description: 'Digital solutions for company specilzation in software developement', status: 'Active' }
    ])
   
    const [filteredCompanyData, setFilteredCompanyData] = useState<CompanyTableDataType[]>([])
    const displayCompanyData = filteredCompanyData?.length > 0 || searchText.length > 0 ? filteredCompanyData : tableOneData

   const {filterData} =  TableFilteration()
    const filterTableData = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setSearchText(value)
        const filteredData = filterData(tableOneData, 'company', value)
        setFilteredCompanyData(filteredData)
    }
    return (
        <section className='w-full p-3 lg:px-4 '>
            <div className='w-full  rounded flex flex-col gap-3'>
                <CompanyHeader currentPage={"CompaniesPage"} title={'Companies'} filterTableData={filterTableData} searchText={searchText} />
                <section className=' rounded  w-full'>'
                    <section>
                        {displayCompanyData?.length > 0 ?
                            <InstanceTable tableColumns={tableOneColumns} tableData={displayCompanyData} />
                            : <p className='text-center text-red-500'>no data found</p>
                        }
                    </section>
                </section>
                <DeletePopUp />
                <AddCompanyPopup title={"Edit Company"} />
            </div>
        </section>
    )
}
export default CompaniesPage