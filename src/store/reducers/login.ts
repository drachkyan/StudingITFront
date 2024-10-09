import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface signinState{
    isloading:boolean,
    error:string,
    isLogged:boolean
}

const initialState:signinState= {
    isloading: false,
    isLogged: false,
    error: ''
}

export const LoginSlice = createSlice({
    name:"login",
    initialState,
    reducers:{
        userFetchProcess(state){
            state.isLogged=false
            state.isloading=true
        },
        userFetchSuccess(state){
            state.isLogged=true 
            state.isloading=false
            state.error=''
        },
        userFetchError(state,action:PayloadAction<string>){
            state.isloading=false
            state.isLogged=false
            state.error=action.payload
        },
        userLogOut(state){
            state.isLogged=false,
            state.error=''
        }
    }
})

export default (LoginSlice)