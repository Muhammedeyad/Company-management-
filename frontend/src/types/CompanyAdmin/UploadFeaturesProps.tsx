import type { FileType } from "./PropTypes"

export interface UploadedFileType {
    uploadedFiles: FileType[]
    files: FileType[]
    setUploadedFiles: React.Dispatch<React.SetStateAction<FileType[]>>
    setFiles: React.Dispatch<React.SetStateAction<FileType[]>>
}

export interface DeleteSelectedFileType {
    id: number,
    files: FileType[]
    setFiles: React.Dispatch<React.SetStateAction<FileType[]>>
}

export interface clearAllFileFuncType{
    setFiles: React.Dispatch<React.SetStateAction<FileType[]>>
}
