import React, { useEffect, useRef,lazy, Suspense } from 'react';
import CodeEditor from "./codeEditor"
import "./taskstyle.less"
import { Outlet } from 'react-router-dom';
import Header from '../../header/header';


const Task=()=>{
  return (
    <div>
      <Header></Header>
      <Outlet />  
      
    </div>


  )
};

export default Task;
