import React, {useState} from "react";
import "./signin.less"
const Login = ()=>{
    const [password, setPas] = useState('');
    const [login, setLog] = useState('');
    return (
        <div className="auth">
            <p>Please sign in your account</p>
            <div className="input_fields">
                <div className="login field">
                    <p>Your email</p>
                    <input onChange={(data)=>{setLog(data.target.value)}} />
                </div>
                <div className="password field">
                    <p>Your password</p>
                    <input type="password" onChange={(data)=>{setPas(data.target.value)}}/>
                    <p className="small">Forgot your password...</p>
                </div>
            </div>
            <div className="signinButton" onClick={()=>{console.log(password);console.log(login)}}>
                <p>Sign in</p>
            </div>
            <div className="altSign">
                <p className="small">Or sign in via</p>
                <img src="https://polygon.readthedocs.io/en/latest/_images/github_logo.png" className="github logo" />
            </div>
        </div>
    )
}
export default Login
