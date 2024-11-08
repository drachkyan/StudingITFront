import axios from "axios";
import { AppDispatch } from "../../store/store";
import { LoginSlice } from "../../store/reducers/login";
import Login from "./signin/signin";
import { LOGIN, LOGOUT, REG } from "../../../constants";


export const fetchAuth = (username:string,password:string)=>async (dispatch: AppDispatch)=>{
    
    try {
        dispatch(LoginSlice.actions.userFetchProcess())
        const response = await axios.post(LOGIN,{username:username, password:password})
        dispatch(LoginSlice.actions.userFetchSuccess())
        localStorage.setItem('accessToken', response.data.access);
        localStorage.setItem('refreshToken', response.data.refresh);
        localStorage.setItem('username', username);
        console.log(localStorage.getItem('accessToken'))
        console.log(localStorage.getItem('refreshToken'))
    } catch (error) {
        dispatch(LoginSlice.actions.userFetchError(error.message))
    }
}

export const fetchRegistration = (username:string,password:string,email:string)=>async (dispatch:AppDispatch)=>{
    try {
        dispatch(LoginSlice.actions.userFetchProcess())
        const response = await axios.post(REG,{username:username, password:password,email:email})
        dispatch(LoginSlice.actions.userFetchSuccess())
        localStorage.setItem('accessToken', response.data.access);
        localStorage.setItem('refreshToken', response.data.refresh);
        localStorage.setItem('username', username);
    } catch (error) {

        dispatch(LoginSlice.actions.userFetchError(error.message))
    }
}

export const fetchLogOut = (refresh:string)=>async (dispatch:AppDispatch)=>{

    try{
    const token = localStorage.getItem("accessToken")
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };    
    const body = {refresh_token:refresh}
    dispatch(LoginSlice.actions.userLogOut())
    localStorage.clear()
    localStorage.setItem('isLogged', "false");
    await axios.post(LOGOUT,body,config)
    }catch(error){
        
    }
}