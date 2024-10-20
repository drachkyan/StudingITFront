import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface update{
    isUpdated:boolean,
    isLoading:boolean
}

const initialState:update = {
    isUpdated:true,
    isLoading:false
}

const FilterUpdater = createSlice({
    name:"filter",
    initialState,
    reducers:{
        ListLoadingProccess(state){
            state.isLoading = true
        },
        ListLoadingSuccess(state){
            state.isLoading=false
            state.isUpdated=true
        },
        ListLoadingError(state){
            state.isLoading=false
        }
    }
})


export default FilterUpdater