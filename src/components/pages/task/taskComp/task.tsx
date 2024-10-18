import React, { useEffect, useRef,lazy } from 'react';
const CodeEditor = lazy(() => import("./codeEditor"));
import "./taskstyle.less"

const Task= () => {
  const [code, setCode] = React.useState('// Ваш код здесь');
  interface Task{
    name:string,
    discription:string,
    defaultValue:string
  }
  const currentTask:Task={name:"Sum a+b",discription:"find sum of a+b",defaultValue:"def Sum A+b:\n\t"}
  return (
    
    <div className='taskSolver'>
      <div>
        <p>Taskname</p>
      </div>
      <div className='problem'>
        <h1>task</h1>
        <CodeEditor defaultText={currentTask.defaultValue}/>
      </div>
    </div>
  );
};

export default Task;