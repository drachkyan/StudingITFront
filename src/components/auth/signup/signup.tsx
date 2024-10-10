import React, {startTransition, useEffect, useState} from "react";
import "./signup.less"
import axios from "axios";
import {useNavigate} from "react-router-dom"
import { fetchRegistration } from "../axiosreq";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/redux";
const Register = ()=>{
    const dispatch = useAppDispatch()
    const {isloading,error,isLogged} = useAppSelector(state=>state.loginReducer)
    type dataError = "null" | "incorrect" | "different passwords" | "none" | "incorrect email"
    const [password, setPas] = useState("");
    const [password2, setPas2] = useState("");
    const [login, setLog] = useState("");
    const [email, setEmail] = useState("");
    const [signerror, setError] = useState<dataError>("none")
    const navigate = useNavigate()
    const HandleClick= (url:string)=>{
        startTransition(()=>{
            navigate(url)
        })
    }
    useEffect(()=>{
        if (isLogged) {
            localStorage.setItem('isLogged', "true");
            HandleClick('/');
        }
    },[isLogged])
    useEffect(()=>{
        if (error!==''){
            setError("incorrect")
        }
    },[error])
    const getErrorLine = (error:dataError)=>{
        switch (error){
            case "none":
                return ""
            case "null":
                return "All fields must not be empty"
            case "different passwords":
                return "Passwords are not the same"
            case "incorrect email":
                return "Email has unknown format"
            case "incorrect":
                return "Username is already taken"
        }
    }
    const check = (pas:string,pas2:string,loge:string,log:string)=>{
        if (pas!=="" && pas2 !=="" && log!=="" && loge!==""){
            if (pas===pas2){
                if(loge.split("@").length>1 && loge.split(".").length>1){
                    setError("none")
                return true
                }else{
                    setError("incorrect email")
                }
            }else{
                setError("different passwords")
            }
        }else{
            setError("null")
        }
        return false
    }
    return (
        <div className="auth">
            <p>Please create account</p>
            <div className="input_fields">
            <div className="login field">
                    <p>Your name</p>
                    <input onChange={(data)=>{setLog(data.target.value)}} />
                </div>
                <div className="login field">
                    <p>Your email</p>
                    <input onChange={(data)=>{setEmail(data.target.value)}} />
                </div>
                <div className="password field">
                    <p>Your password</p>
                    <input type="password" onChange={(data)=>{setPas(data.target.value)}}/>
                </div>
                <div className="password field">
                    <p>Repeat your password</p>
                    <input type="password" onChange={(data)=>{setPas2(data.target.value)}}/>
                </div>
            </div>
            <div className="errorbox"><p className="errorp" style={{display:(signerror==="none")?"none":"block"}}>{getErrorLine(signerror)}</p></div>
            <div className="signinButton" onClick={()=>{
                    if (check(password,password2,email,login)){
                        dispatch(fetchRegistration(login,password,email))
                    }}}>
                <p>Create account</p>
            </div>
            <div className="altSign">
                <p className="small">Or sign up via</p>
                <img src="https://polygon.readthedocs.io/en/latest/_images/github_logo.png" className="github logo" />
            </div>
        </div>
    )
}

export default Register