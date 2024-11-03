import React, { useEffect, useState, Suspense, startTransition } from 'react';
import "./taskList.less";
import { useAppSelector } from '../../../../store/hooks/redux';
import { Navigate, useNavigate } from 'react-router-dom';
import Task from '../taskComp/task';

interface TaskType {
    name: string,
    desc: string,
    hash_name: string,
    cat: number[]
}

const TaskList = () => {
    const {tasks} = useAppSelector(state=>state.listReducer)
    const navigate = useNavigate()
    const HandleClick= (url:string)=>{
        startTransition(()=>{
            navigate(url)
        })
    }
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className='taskList'>
                <div className='welcomeBlock'>
                    <h1>Welcome on StudyinGIT!</h1>
                    <p>Pick up filters on topics of interest, choose a task and start solving it!</p>
                </div>
                {tasks.map((el: TaskType, index: number) => {
                    return (
                        <div className="task" key={index} onClick={()=>{HandleClick("task/"+el.hash_name)}}>
                            <div className='name'><h1>{el.name}</h1></div>
                        </div>
                    );
                })}
            </div>
            
        </Suspense>
    );
}

export default TaskList