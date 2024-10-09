import "./headerstyle.less"
import React, {useState, useEffect,startTransition} from "react"
const profileLogo = require("./profile.png")
import { useNavigate } from 'react-router-dom';

const Header = ()=>{
    const navigate = useNavigate()

    const HandleClick= (url:string)=>{
        startTransition(()=>{
            navigate(url)
        })
    }
    return (
        <div className="header">
            <div className="links">
                <p onClick={()=>{HandleClick('/')}}>Problems</p>
                <p>Forum</p>
                <p>Git</p>
            </div>
            <img onClick={()=>{
                if (localStorage.getItem("isLogged")==="true"){
                    HandleClick('/profile')
                }else{
                    HandleClick('/auth')
                }
                }} className="profile" src="https://i.imgur.com/vNkH43g.png"  />
        </div>
    )
}

export default Header