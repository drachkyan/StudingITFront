import "./auth.less"
import React from "react"

const Auth = ()=>{
    document.cookie = "user=John; domain=localhost:8080"
    console.log(document.cookie )
    return (
        <div> <p>Auth</p></div>
    )
}

export default Auth