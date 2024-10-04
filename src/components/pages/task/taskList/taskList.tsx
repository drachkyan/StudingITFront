import React, { useEffect, useState, Suspense } from 'react';
import "./taskList.less";

const TaskList = () => {
    interface Task {
        name: string,
        desc: string,
        cat: number[]
    }
    const testTask:Task={name:"Sum a+b", desc:"Find Sum A+b", cat:[1]}
    const [taskList, changeList] = useState<Task[]>([testTask]);

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
            {taskList.map((el: Task, index: number) => {
                return (
                    <div className="task" key={index}>
                        <p>{el.name}</p>
                        <p>{el.desc}</p>
                    </div>
                );
            })}
        </Suspense>
    );
}

export default TaskList