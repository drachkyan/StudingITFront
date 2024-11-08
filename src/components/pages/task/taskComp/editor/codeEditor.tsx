import React, { startTransition, useEffect, useState } from 'react';
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./editorStyle.less"
import CustomSelect from './custom_select/CustomSelect';
import axios from 'axios';
import { refreshTokenFunction } from './refresh_access';
import { WEBSOCKET } from '../../../../../../constants';

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
}

const MyEditor: React.FC<MyEditorProps> = ({ taskState }) => {
  const [selectedOption, setSelectedOption] = useState('cpp');
  const hash_name = useLocation().pathname.split('/');
  const [codeText, setText] = useState<string>();
  const [isloading, setLoading] = useState<boolean>(false)
  const [isLogged,setLogged] = useState<string>(localStorage.getItem("isLogged"))
  
  useEffect(() => {
    switch (selectedOption) {
      case 'py':
        setText(localStorage.getItem(selectedOption+hash_name[hash_name.length-1])||taskState.patterns.python);
        break;
      case 'cpp':
        setText(localStorage.getItem(selectedOption+hash_name[hash_name.length-1])||taskState.patterns.cpp);
        break;
      case 'go':
        setText(localStorage.getItem(selectedOption+hash_name[hash_name.length-1])|| taskState.patterns.go);
        break;
      default:
        setText('');
        break;
    }
  }, [selectedOption, taskState]);
  const navigate = useNavigate() 
    const navigateURL= ( url:string)=>{
        startTransition(()=>{
            navigate(url)
        })
    }
  const sendWebSocket =()=>{
    
    localStorage.setItem(selectedOption+ hash_name[hash_name.length-1], codeText);
    const socket = new WebSocket(WEBSOCKET);
    setLoading(true);
    
    const sendCode = ()=> {
      console.log("Sending code...")
      socket.send(
        JSON.stringify(
          {
            code : codeText,
            lang : selectedOption,
            task_name : taskState.name,
            token : localStorage.getItem("accessToken")
         }
        )
      )
    }

    socket.onopen= ()=>{
      sendCode()
    }
    socket.onmessage = (message)=>{
      console.log(message.data)
      const messageJSON = JSON.parse(message.data);
      if (messageJSON.status===400){
        localStorage.setItem("isLogged","false")
        refreshTokenFunction(localStorage.getItem("refreshToken")).then(()=>{
          if (localStorage.getItem("isLogged")==="true"){
            sendWebSocket()
          }
          else{
            navigateURL('/auth')
          }
        } 
        )
        
      }else{
        if (messageJSON.stage==="test" || messageJSON.message==="success"){
          setLoading(false)
        }else{
          console.log(messageJSON.message)
        }
      }
      
    }
  }

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setText(value);
    }
  };
  const username:string=localStorage.getItem("username")


  const handleChange = (event:string) => {
    setSelectedOption(event);
  };
  const options = [{value:"cpp", label:"C++"},
    {value:"py", label:"Python"},
    {value:"go", label:"Go"},
  ]
  return (
    
    <div className='CodeEditor'>
      <div className="editor-menu">
        <CustomSelect options={options} selectedOption={selectedOption} onChange={handleChange}/> 
        {(isLogged==="true")?
        <div className={'apply '+ (isloading ? 'loading':'notloading')} onClick={()=>{!isloading ? sendWebSocket() 
          : console.log("testing...")}}><p>Run</p></div>: <div className='notAuth'>You need to log in to send your solution...</div>}
        
      </div>
      
      <Editor
        height="50vh"
        width="50vh"
        defaultLanguage={selectedOption}
        value={codeText}
        onChange={handleEditorChange}
      />
      
    </div>
  );
};

export default MyEditor;