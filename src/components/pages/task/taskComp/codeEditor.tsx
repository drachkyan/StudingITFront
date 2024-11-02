import React, { useEffect, useState } from 'react';
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import "./editorStyle.less"

interface Task {
  name: string;
  patterns: {
    python: string;
    cpp: string;
    go: string;
  };
  desc: string;
  cat: number;
}

interface MyEditorProps {
  taskState: Task;
  language: string;
}

const MyEditor: React.FC<MyEditorProps> = ({ taskState, language }) => {
  const [codeText, setText] = useState(taskState.patterns.python);
  const [loading, setLoading] = useState('Send')
  useEffect(() => {
    switch (language) {
      case 'py':
        setText(taskState.patterns.python);
        break;
      case 'cpp':
        setText(taskState.patterns.cpp);
        break;
      case 'go':
        setText(taskState.patterns.go);
        break;
      default:
        setText('');
        break;
    }
  }, [language, taskState]);

  const sendWebSocket =()=>{
    const socket = new WebSocket('http://45.82.153.53:1234/ws');
    socket.onopen= ()=>{
      console.log("Sending code...")
      socket.send(
        JSON.stringify(
          {
            code : codeText,
            lang : language,
            task_name : taskState.name,
            username : localStorage.getItem("username")||"drachka"
         }
        )
      )
    }
    socket.onmessage = (message)=>{
      console.log(message)
    }
  }

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setText(value);
    }
  };
  const username:string=localStorage.getItem("username")
  return (
    <div className='CodeEditor'>
      <Editor
        height="50vh"
        width="50vh"
        defaultLanguage={language}
        value={codeText}
        onChange={handleEditorChange}
      />
      <div className='apply' onClick={sendWebSocket}><p>{loading}</p></div>
    </div>
  );
};

export default MyEditor;