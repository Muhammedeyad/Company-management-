import type { clearAllFileFuncType, DeleteSelectedFileType } from "../../types/CompanyAdmin/UploadFeaturesProps"
// import type { UploadedFileType } from "../../types/CompanyAdmin/UploadFeaturesProps"

export const UploadDocumentFeatures = () => {
    const clearAllFiles = ({setFiles}: clearAllFileFuncType) => {
        setFiles([])
    }
    
    const deleteSelectedFile = ({id, files, setFiles}:DeleteSelectedFileType) => {
        
        const filteredFiles = files?.filter((file: { lastModified: number }) => {
            return file.lastModified != id
        })
        setFiles(filteredFiles)
    }

    return { clearAllFiles, deleteSelectedFile }
}
