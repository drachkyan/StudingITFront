import React, { useState } from 'react';
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';

const MyEditor = () => {
  const [codeText, setText]=useState("");
  const handleEditorChange = (value:any, event:any) => {
    setText(value);
  };
  let defaultText:string = "int main(123)";
  type language = "cpp"|"javascript"|"c"|"python";
  interface editor{
    language: language,
    defaultValue: string,
  }
  const editor:editor = {language:"python",defaultValue:"илюха лох"};
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