import React, { useEffect, useRef,lazy, useState } from 'react';
import CodeEditor from "./codeEditor"
import "./taskstyle.less"
import { useLocation } from 'react-router-dom';
import { axiosTask } from './taskRequst';

interface hash_name {
  hash: string | undefined
}

interface Task{
  name:string,
  patterns:{
    python:string,
    cpp:string,
    go:string
  },
  desc:string,
  cat:number
}

const initialState:Task={
    name:"",
    patterns:{
        python:"",
        cpp:"",
        go:""
    },
    desc:"",
    cat:0
}

const TaskSolver = ()=>{
    const [taskState,setTask] = useState<Task>(initialState)
    const hash_name = useLocation().pathname.split('/');
    
    axiosTask(hash_name[hash_name.length-1]).then((res)=>{setTask(res.data)})
    
    return (
        
        <div className='taskSolver'>
        <div>
            <h1>{taskState.name}</h1>
        </div>
        <div className='problem'>
            <p>{taskState.desc}</p>
            <CodeEditor defaultText={taskState.patterns.python}/>
        </div>
        </div>
    );
};

export default TaskSolver;
