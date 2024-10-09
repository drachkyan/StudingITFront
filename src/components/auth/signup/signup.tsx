import React, {useState} from "react";
import "./signup.less"
import axios from "axios";

const Register = ()=>{
    type dataError = "null" | "incorrect" | "different passwords" | "none" | "incorrect email"
    const [password, setPas] = useState("");
    const [password2, setPas2] = useState("");
    const [login, setLog] = useState("");
    const [email, setEmail] = useState("");
    const [signerror, setError] = useState<dataError>("none")
    const handleSubmitForm = (login:string,email:string,password:string) => {    

        axios.post('http://45.82.153.53:8000/account/registration/', {
        
                    username: login,
                    email: email,
                    password:password,
        
                })
        
                .then(response => {
                    console.log(response.status)
                    if (response.status == 302){
                        setError("incorrect");
                        return;
                    }
                    if (response.status != 201) return
                    
                    localStorage.setItem('accessToken', response.data.access);
        
                    localStorage.setItem('refreshToken', response.data.refresh);
                    
                    
                })
        
                .catch(error => {
                    if (error.status == 302){
                        setError("incorrect");
                    }
                })
        
            }
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
                    handleSubmitForm(login,email,password)
                }
            }}>
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