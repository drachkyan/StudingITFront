import "./style.less"
import React from 'react';
import { lazy } from 'react';
import {createRoot} from 'react-dom/client'
import {App} from './components/app'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
const Task = lazy(() => import('./components/pages/task/taskComp/task'));
const Profile = lazy(() => import("./components/pages/profile/profile"));
const TaskList = lazy(() => import("./components/pages/task/taskList/taskList"));
const root:HTMLElement = document.getElementById("root");

let a:number = 5;
console.log(a);

const container = createRoot(root);

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: "/task",
            element: <Task />,
        },
        {
            path: "/",
            element: <TaskList />,
        },
        {
            path: "/profile",
            element: <Profile />,
        },
      ]
    },
  ]);

container.render(<RouterProvider router={router} />)
