import React, { lazy,Component, StrictMode } from 'react'
import { BrowserRouter, Navigate, Outlet } from 'react-router-dom'
import "./mainstyle.less"
import { setupStore } from '../store/store'

const App = () => {
  const store = setupStore();

  return (
    <Outlet></Outlet>
  );
};


export default App;
   