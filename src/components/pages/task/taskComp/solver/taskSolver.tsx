import React, { useEffect, useRef,lazy, useState } from 'react';
import CodeEditor from "../editor/codeEditor"
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

    
    return (
        
        <div className='taskSolver'>
            <div className='leftside'>
                <div className='taskDescription'>
                    <h1>{taskState.name}</h1>
                    <p>{taskState.desc}</p>
                    <h2>Limits</h2>
                    <div className="limits">
                        
                        <p>Time: {"10s"}</p>
                        <p>Memory: {"1488 kB"}</p>
                    </div>
                </div>
                <div className="testCases">
                    <h1>Test cases</h1>
                    <div className="casesList"></div>
                </div>
            </div>
            <div className="rightside">

                <CodeEditor taskState={taskState} />
            </div>
        </div>
    );
};

export default TaskSolver;