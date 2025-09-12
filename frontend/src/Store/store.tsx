import { configureStore } from '@reduxjs/toolkit'

import reducer from '../features/CompanyAdmin/UploadDocument/UploadDocumentSlice'
const store =  configureStore({
    reducer: {
        document: reducer,
    },
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck: false
        }),
    devTools: true 
    
})


export default store