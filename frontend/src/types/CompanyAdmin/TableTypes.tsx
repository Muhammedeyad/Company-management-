export interface InstanceTableColumnType{
    columnName: string,
    fieldName: string
}
export interface InstanceTableDataType{
    instanceName: string,
    instanceId: string,
    status: string
}


export interface InstanceTablePropType{
    tableColumns: InstanceTableColumnType[]
    tableData: InstanceTableDataType[]
}


// instance table type 

export interface CompanyTableColumnType{
    columnName: string,
    fieldName: string
}
export interface CompanyTableDataType{
    companyName: string,
    description: string,
    status: string
}


export interface CompanyTablePropType{
    tableColumns: CompanyTableColumnType[]
    tableData: CompanyTableDataType[]
}