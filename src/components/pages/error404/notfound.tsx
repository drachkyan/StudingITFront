import "./notfound.less"
import React, {useState, useEffect,startTransition} from "react"
import { useNavigate } from 'react-router-dom';

const NotFound = ()=>{
    const navigate = useNavigate()

    const HandleClick= (url:string)=>{
        startTransition(()=>{
            navigate(url)
        })
    }
    const error:string = "This page is not real. Try it in alternative reality. Or just wait until it created :)"
    return (
        <div className="box">
            <div className="center">
                <p className="Error line">{error}</p>
                <p onClick={()=>{HandleClick("/")}}>Main page</p>
            </div>
            
        </div>
    )
}

export default NotFound