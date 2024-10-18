import React, { useEffect, useState, Suspense } from 'react';
import "./taskList.less";

const TaskList = () => {
    interface Task {
        name: string,
        desc: string,
        cat: number[]
    }
    const [taskList, changeList] = useState<Task[]>([]);

    useEffect(() => {
        fetch('http://45.82.153.53:8000/tasksAPI/tasks/')
            .then(response => {
                return response.json();
            })
            .then(data => {
                changeList(prev => {
                    return [...prev, ...data]
                });
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }, []); 

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className='taskList'>
                <div className='welcomeBlock'>
                    <h1>Welcome on StudyinGIT!</h1>
                    <p>Pick up filters on topics of interest, choose a task and start solving it!</p>
                </div>
                {taskList.map((el: Task, index: number) => {
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