import React, { useEffect, useRef,lazy } from 'react';
const CodeEditor = lazy(() => import("./codeEditor"));

const Task = () => {
  const [code, setCode] = React.useState('// Ваш код здесь');
  
  return (
    
    <div>
      <h1>task</h1>
      <CodeEditor />
    </div>
  );
};

export default Task;