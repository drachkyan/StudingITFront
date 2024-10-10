import React, { startTransition } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../store/hooks/redux';
import LoginSlice from '../../../store/reducers/login';
import { fetchLogOut } from '../../auth/axiosreq';

const Profile = ()=>{
       
    const dispatch = useAppDispatch()
    const navigate = useNavigate() 
    const navigateURL= ( url:string)=>{
        startTransition(()=>{
            navigate(url)
        })
    }
    return (

        <div className='profile'>
            <p>profile</p>
            <p onClick={()=>{
                
                const refresh_roken = localStorage.getItem("refreshToken")
                console.log(refresh_roken)
                dispatch(fetchLogOut(refresh_roken))
                navigateURL('/')
            }}> LOG OUT</p>
        </div>
        
    )
}

export default Profile 