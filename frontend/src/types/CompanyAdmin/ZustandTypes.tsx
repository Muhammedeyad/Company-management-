export interface CompanyPopUpType {
    mode: string,
    data: any[]
}

export interface ZustandTypes {
    selectedTab: string | undefined
    setSelectedTab: (selectedTab: string) => void,
    isEdit: CompanyPopUpType,
    setIsEdit: (isEdit: any) => void
}

