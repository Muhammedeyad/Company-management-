import type { ReactNode } from "react"

export interface ChatType {
    theme: boolean
    messages: MessageType[]
}


export interface MessageType {
    message: string,
    position: boolean
}

export interface ProfileTypes {
    isSideBarOpen: boolean,
    isProfileOpen: boolean,
    setIsProfileOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export interface AuthAdminType {
    username: string,
    password: string,
    role: string
}

export interface ReactChild {
    children: React.ReactNode
}

export interface AuthUserType {
    username: string,
    password: string,
    instanceName?: string
}

export interface AuthContextTypes {
    authUserData: AuthUserType
    setAuthUserData: React.Dispatch<React.SetStateAction<AuthUserType>>
}



export interface FormControlTypes {
    isChatBotPage: boolean,
    setAuthUserData: React.Dispatch<React.SetStateAction<AuthUserType>>,
    authUserData: AuthUserType
}


export interface HandleChangeProp {
    title?: string,
    handleChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void,
    handleSubmit?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface HandleChangeProp2 {
    title?: string,
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    handleSubmit?:  (e: any) => void
}


export interface RegisterUserType{
  firstName: string,
  lastName: string,
  userRole: string,
  email: string,
  password: string,
  confirmPassword: string
}


export interface SingleUploadFuncType{
    file: FileType
    isUploadPage?: boolean
    deleteSelectedFile?: any
    files?: FileType[]
    setFiles?: React.Dispatch<React.SetStateAction<FileType[]>>
}


export interface FileType {
    name: string,
    lastModified: number,
    lastModifiedDate:object
    size: number
    webkitRelativePath: string
    type: string
}


export interface ButtonType{
    title: string,
    icon?:   ReactNode
    bgcolor: string, 
    textcolor?: string,
    textcommoncolor?: string
    width?: string
    mt?: number,
    onClick?: any
    customCSS?: string
}



