import "./style.less"
import React from 'react';
import { lazy } from 'react';
import {createRoot} from 'react-dom/client'
import App from './components/app'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
const Task = lazy(() => import('./components/pages/task/taskComp/task'));
const Profile = lazy(() => import("./components/pages/profile/profile"));
const Auth = lazy(() => import("./components/auth/Auth"));
const NotFound = lazy(() => import("./components/pages/error404/notfound"));
const root:HTMLElement = document.getElementById("root");
import Main from "./components/pages/mainpage/main"

const container = createRoot(root);


container.render(<App />)


