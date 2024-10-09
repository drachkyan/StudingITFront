import "./auth.less"
import React, {lazy} from "react"

const Login = lazy(() => import("./signin/signin"));
const Register = lazy(() => import("./signup/signup"));

interface AuthProps {
    mode: "login" | "registration"; // Определяем типы для пропса mode
}

const Auth: React.FC<AuthProps> = ({mode})=>{
    return (
        <div className="authBox"> 
            {mode==="login"?(<Login />):(<Register />)}
        </div>
    )
}

export default Auth