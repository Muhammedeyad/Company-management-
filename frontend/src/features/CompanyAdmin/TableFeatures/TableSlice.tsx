import { createSlice } from "@reduxjs/toolkit";

const initialState:any[] = {
    data: []
}
const tableSlice = createSlice({
    name: 'table',
    initialState: initialState,
    reducers: {
        addCompany(state, action){
            action.payload?.data.forEach((company)=>{
                console.log(company);
                
                state.data.push( company)
            })
        },
        editCompany(state, action){
            const updatedRecord = action.payload.data
            console.log(updatedRecord)
            state.data.find((record)=>{
                if( updatedRecord.id == record.id ) {
                    record.companyName=updatedRecord.companyName
                    record.description=updatedRecord.description
                    record.status=updatedRecord.status
                }
            })
        },
        initialDataLoad(state, action){
            state.data = action.payload.data
        },
        deleteCompany(state, action){
            const deleteId = action.payload.data
            console.log(deleteId, 'from slice');

            let filtereditems = state?.data.filter((item)=>{
                if(item.id != deleteId){
                    return item
                }
            })
            state.data= filtereditems;
            
        }
    }
})

export const {addCompany, deleteCompany, editCompany, initialDataLoad} = tableSlice.actions
export const tableReducer =  tableSlice.reducer