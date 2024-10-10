import axios from "axios";
import { AppDispatch } from "../../store/store";
import { LoginSlice } from "../../store/reducers/login";
import Login from "./signin/signin";


export const fetchAuth = (username:string,password:string)=>async (dispatch: AppDispatch)=>{
    
    try {
        dispatch(LoginSlice.actions.userFetchProcess())
        const response = await axios.post("http://45.82.153.53:8000/account/login/",{username:username, password:password})
        dispatch(LoginSlice.actions.userFetchSuccess())
        localStorage.setItem('accessToken', response.data.access);
        localStorage.setItem('refreshToken', response.data.refresh);
    } catch (error) {
        dispatch(LoginSlice.actions.userFetchError(error.message))
    }
}

export const fetchRegistration = (username:string,password:string,email:string)=>async (dispatch:AppDispatch)=>{
    try {
        dispatch(LoginSlice.actions.userFetchProcess())
        const response = await axios.post("http://45.82.153.53:8000/account/registration/",{username:username, password:password,email:email})
        dispatch(LoginSlice.actions.userFetchSuccess())
        localStorage.setItem('accessToken', response.data.access);
        localStorage.setItem('refreshToken', response.data.refresh);
    } catch (error) {

        dispatch(LoginSlice.actions.userFetchError(error.message))
    }
}

export const fetchLogOut = (refresh:string)=>async (dispatch:AppDispatch)=>{
    try{
    await axios.post("http://45.82.153.53:8000/account/logout",{refresh_token:refresh})
    dispatch(LoginSlice.actions.userLogOut())
    localStorage.setItem('isLogged', "false");
    }catch(error){
        
    }
}