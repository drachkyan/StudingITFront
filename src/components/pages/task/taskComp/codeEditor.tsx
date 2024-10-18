import React, { useState } from 'react';
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';

interface MyEditorProps {
  defaultText?: string; 
}

const MyEditor: React.FC<MyEditorProps> = ({ defaultText }) => {
  const [codeText, setText]=useState("");
  const handleEditorChange = (value:any, event:any) => {
    setText(value);
  };

  type language = "cpp"|"javascript"|"c"|"python";
  interface editor{
    language: language,
    defaultValue: string,
  }
  const editor:editor = {language:"python",defaultValue:defaultText};
  return (
    <div className='CodeEditor'>
      <Editor
      height="50vh"
      width="50vh"
      defaultLanguage={editor.language}
      defaultValue={editor.defaultValue}
      onChange={handleEditorChange}
    />
    <button onClick={()=>{console.log(codeText)}}>send</button>
    </div>
    
  );
};

export default MyEditor;