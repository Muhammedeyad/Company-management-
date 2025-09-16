import { configureStore } from '@reduxjs/toolkit'
import reducer from '../features/CompanyAdmin/UploadDocument/UploadDocumentSlice'
import { tableReducer } from '../features/CompanyAdmin/TableFeatures/TableSlice'


const store =  configureStore({
    reducer: {
        document: reducer,
        table: tableReducer
    },
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck: false
        }),
    devTools: true 
    
})


export default store