import React, { startTransition } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../store/hooks/redux';
import LoginSlice from '../../../store/reducers/login';
import { fetchLogOut } from '../../auth/axiosreq';
import "./profile.less"

const Profile = ()=>{
       
    const dispatch = useAppDispatch()
    const navigate = useNavigate() 
    const navigateURL= ( url:string)=>{
        startTransition(()=>{
            navigate(url)
        })
    }
    const HandleClick=()=>{
        const refresh_roken = localStorage.getItem("refreshToken")
        
        dispatch(fetchLogOut(refresh_roken))
        navigateURL('/')
    }
    
    return (
        <div className='box'>
            <div className='profile'>
            <p>Profile</p>
            <p onClick={HandleClick}>LOG OUT</p>
        </div>
        </div>
        
        
    )
}

export default Profile 