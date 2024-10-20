import React, { useEffect, useState, Suspense } from 'react';
import "./taskList.less";
import { useAppSelector } from '../../../../store/hooks/redux';

interface Task {
    name: string,
    desc: string,
    hash: string,
    cat: number[]
}

const TaskList = () => {
    const {tasks} = useAppSelector(state=>state.listReducer)

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className='taskList'>
                <div className='welcomeBlock'>
                    <h1>Welcome on StudyinGIT!</h1>
                    <p>Pick up filters on topics of interest, choose a task and start solving it!</p>
                </div>
                {tasks.map((el: Task, index: number) => {
                    return (
                        <div className="task" key={index}>
                            <div className='name'><h1>{el.name}</h1></div>
                            <div className='taskDescription'></div>
                        </div>
                    );
                })}
            </div>
            
        </Suspense>
    );
}

export default TaskList