import React, { useEffect, useRef,lazy, Suspense } from 'react';
import "./solver/taskstyle.less"
import { Outlet } from 'react-router-dom';
import Header from '../../header/header';


const Task=()=>{
  return (
    <div className='taskContainer'>
      <Header></Header>
      <Outlet />  
      
    </div>
  )
};

export default Task;
