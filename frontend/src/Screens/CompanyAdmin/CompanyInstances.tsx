import React, { useState } from 'react'
import { CompanyHeader } from '../../Layouts/CompanyAdmin/Header';
import { AddCompanyPopup } from '../../Components/modals/AddCompanyPopup';
import { InstanceTable } from '../../Components/Tables/InstanceTable';
import { DeletePopUp } from '../../Components/modals/DeletePopUp';
import type { InstanceTableDataType } from '../../types/CompanyAdmin/TableTypes';
import { TableFilteration } from '../../features/CompanyAdmin/CommonTableFilteration/TableFilteration';

const CompanyIntances: React.FC = () => {
	const [searchText, setSearchText] = useState<string>("")
	const tableOneColumns = [
		{ columnName: "Instance Name", fieldName: 'instanceName' },
		{ columnName: "Instance Id", fieldName: 'instanceId' },
		{ columnName: "Status", fieldName: 'status' },
	]

	const tableOneData = [
		{ instanceName: "Cy Ganderton", instanceId: '3433-343-34334', status: 'active' },
		{ instanceName: "Ry Ganderton", instanceId: '3433-343-34334', status: 'active' },
		{ instanceName: "Zy Ganderton", instanceId: '3433-343-34334', status: 'active' },
	]
	const [filteredCompanyData, setFilteredCompanyData] = useState<InstanceTableDataType[]>([])
	const displayCompanyData = filteredCompanyData?.length > 0 || searchText.length > 0 ? filteredCompanyData : tableOneData

	const { filterData } = TableFilteration()
	const filterTableData = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target
		setSearchText(value)
		const filteredData = filterData(tableOneData, 'instance', value)
		setFilteredCompanyData(filteredData)
	}

	return (
		<section className='w-full p-3 lg:px-4 '>
			<section className='  w-full  rounded flex flex-col gap-3'>
				<div className='bg-white rounded w-full '>
					<CompanyHeader title={undefined} currentPage={"CompanyInstances"} filterTableData={filterTableData} searchText={searchText} />
					{displayCompanyData?.length > 0 ?
						<InstanceTable tableColumns={tableOneColumns} tableData={displayCompanyData} />
						: <p className='text-center text-red-500'>no data found</p>
					}
				</div>
			</section>
			<DeletePopUp />
			<AddCompanyPopup title={"Update Company"} />
		</section>
	)
}
export default CompanyIntances