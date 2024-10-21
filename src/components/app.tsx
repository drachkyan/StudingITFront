import React, { lazy,Component, StrictMode } from 'react'
import { BrowserRouter, Navigate, Outlet } from 'react-router-dom'
import "./mainstyle.less"
import { Provider } from 'react-redux'
import { setupStore } from '../store/store'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const Profile = lazy(() => import("./pages/profile/profile"));
const Auth = lazy(() => import("./auth/Auth"));
const NotFound = lazy(() => import("./pages/error404/notfound"));
const root:HTMLElement = document.getElementById("root");
import Main from "./pages/mainpage/main"
import Task from './pages/task/taskComp/task'
import TaskSolver from './pages/task/taskComp/taskSolver'

const App = () => {
  const store = setupStore();

  return (
    <Outlet></Outlet>
  );
};


export default App;
   