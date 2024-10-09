import React, { startTransition } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../store/hooks/redux';
import LoginSlice from '../../../store/reducers/login';

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
                localStorage.setItem('isLogged', "false");
                navigateURL('/')
                dispatch(LoginSlice.actions.userLogOut())
            }}> LOG OUT</p>
        </div>
        
    )
}

export default Profile 