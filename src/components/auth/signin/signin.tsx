import React, {useState, startTransition, useEffect} from "react";
import "./signin.less"
import {useNavigate} from "react-router-dom"
import { fetchAuth } from "../axiosreq";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/redux";

const Login = ()=>{
    const dispatch = useAppDispatch()
    const {isloading,error,isLogged} = useAppSelector(state=>state.loginReducer)
    const navigate = useNavigate()
    const HandleClick= (url:string)=>{
        startTransition(()=>{
            navigate(url)
        })
    }
    useEffect(() => {
        if (isLogged) {
            localStorage.setItem('isLogged', "true");
            HandleClick('/');
        }
    }, [isLogged]);
    useEffect(()=>{
        if (error!==''){
            setError("incorrect")
        }
    },[error])
    const [password, setPas] = useState('');
    type dataError = "null" | "incorrect" | "none" | "incorrect email"
    const [login, setLog] = useState('');
    const [signerror, setError] = useState<dataError>("none")
    const getErrorLine = (error:dataError)=>{
        switch (error){
            case "none":
                return ""
            case "null":
                return "All fields must not be empty"
            case "incorrect email":
                return "Email has unknown format"
            case "incorrect":
                return "Wrong password or login"
        }
    }
    const check = (pas:string,log:string)=>{
        if (pas!=="" && log!==""){
            return true
        }else{setError("null")}
        return false
    }
    return (
        <div className="auth">
            <p>Please sign in your account</p>
            <div className="input_fields">
                <div className="login field">
                    <p>Your login</p>
                    <input onChange={(data)=>{setLog(data.target.value)}} />
                </div>
                <div className="password field">
                    <p>Your password</p>
                    <input type="password" onChange={(data)=>{setPas(data.target.value)}}/>
                    <p className="small">Forgot your password</p>
                </div>
            </div>
            <div className="errorbox"><p className="errorp" style={{display:(signerror==="none")?"none":"block"}}>{getErrorLine(signerror)}</p></div>
            <div className="signinButton" onClick={()=>{
                if (check(password,login)){
                    dispatch(fetchAuth(login,password))
                }}}>
                <p>{isloading?"Loading...":"Sign in"}</p>
            </div>
            
            <div className="altSign">
                <p className="small" onClick={()=>{console.log(isLogged)}}>Or sign in via</p>
                <img src="https://polygon.readthedocs.io/en/latest/_images/github_logo.png" className="github logo" />
            </div>
            <p className="createLink" onClick={()=>{HandleClick('/signup')}}>Don't have account? Create one...</p>
        </div>
    )
}
export default Login
