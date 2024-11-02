import "./websocket.less"
import React, { useEffect, useState } from 'react'
import { io } from "socket.io-client";



const TestWebsocket = ()=>{

    const [socketText,setText] = useState<string>('Waiting message')

    const handleClick =()=>{
      const socket = new WebSocket('http://45.82.153.53:1234/ws');
      socket.onopen= ()=>{
        console.log("connected")
        socket.send(
          JSON.stringify(
            {
              code : "def sum(int a,int b):\n return a+b",
              lang : "python",
              task_name : "1-sum",
              username : localStorage.getItem("username")||"drachka"
           }
          )
        )
      }
      socket.onmessage = ()=>{

      }
    }

    useEffect(() => {
        // Обработка события получения сообщения
        
    
        // Очистка при размонтировании компонента
        
      }, []);

    return(
        <div className="content">
            <p>Here will be text... </p>
            <p>{socketText}</p>
            <button onClick={handleClick}>Make connection</button>
        </div>
    )
}

export default TestWebsocket