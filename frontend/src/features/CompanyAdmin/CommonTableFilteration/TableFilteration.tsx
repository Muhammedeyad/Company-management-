

export const TableFilteration = () => {
  const filterData = (tableData, tableName, value)=>{
        const isCompany = tableName == 'company'? true: false
        const columnName = isCompany ? 'companyName' : 'instanceName'
        return tableData.filter((data) => {
            return data[columnName].toLowerCase().includes(value.toLowerCase())
        })
       
  }
  return {filterData}
}
