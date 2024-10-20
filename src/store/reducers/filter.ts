import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface filter{
    programming:boolean,
    git:boolean
}

const initialState:filter = {
    programming:false,
    git:false

}

const FilterSlice = createSlice({
    name:"filter",
    initialState,
    reducers:{
        changeField(state,action:PayloadAction<number>){
            switch (action.payload) {
                case 1:
                    state.programming?state.programming=false:state.programming=true
                    break;
                case 2:
                    state.git?state.git=false:state.git=true
                    break;
                default:
                    break;
            }
        }
    }
})

export default FilterSlice