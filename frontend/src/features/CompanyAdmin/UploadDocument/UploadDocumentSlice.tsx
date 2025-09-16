import { createSlice } from "@reduxjs/toolkit";
import type { FileType } from "../../../types/CompanyAdmin/PropTypes";

const initialState:FileType[] = []
const documentSlice = createSlice({
    name: "document",
    initialState: initialState,
    reducers: {
        uploadDocuments(state, actions) {
            const {files}= actions?.payload
            files.map((item)=>{
                state.push(item)
            })
            return state
        },
        clearAllDocuments() {
                
        },
        deleteDocumentFile() {

        }
    }
})


export const { uploadDocuments, clearAllDocuments, deleteDocumentFile } = documentSlice.actions
export default documentSlice.reducer