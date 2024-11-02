import React, { useEffect, useRef,lazy, useState } from 'react';
import CodeEditor from "./codeEditor"
import "./taskstyle.less"
import { useLocation } from 'react-router-dom';
import { axiosTask } from './taskRequst';

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
    useEffect(()=>{  
        axiosTask(hash_name[hash_name.length-1]).then((res)=>{setTask(res.data)})
    },[])

    const [selectedOption, setSelectedOption] = useState('python');

    const handleChange = (event:string) => {
        setSelectedOption(event);
    };
    return (
        
        <div className='taskSolver'>
        <div>
            <h1>{taskState.name}</h1>
            <p onClick={()=>{console.log(taskState.patterns.python)}}>{taskState.desc}</p>
        </div>
        <div></div>
        <select value={selectedOption} onChange={(event)=>{handleChange(event.target.value)}}>
        <option value="cpp">C++</option>
        <option value="go">Go</option>
        <option value="py">Python</option>
        </select>
        <CodeEditor taskState={taskState} language={selectedOption}/>
        </div>
    );
};

export default TaskSolver;
