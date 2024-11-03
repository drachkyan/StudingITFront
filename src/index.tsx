import "./style.less"
import React, { StrictMode } from 'react';
import { lazy } from 'react';
import {createRoot} from 'react-dom/client'
import App from './components/app'
import {
  BrowserRouter,
  Route,
  Routes,
  } from "react-router-dom";

import Task from './components/pages/task/taskComp/task'
const Profile = lazy(() => import("./components/pages/profile/profile"));
const Auth = lazy(() => import("./components/auth/Auth"));
const NotFound = lazy(() => import("./components/pages/error404/notfound"));
const root:HTMLElement = document.getElementById("root");
import Main from "./components/pages/mainpage/main"
const TaskSolver = lazy(() => import("./components/pages/task/taskComp/solver/taskSolver"));
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
const container = createRoot(root);

const store = setupStore();

container.render(

    <div>
    <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />}>
              <Route path="task" element={<Task/>}>
                <Route path="*" element={<TaskSolver  />} />
                <Route path="" element={<NotFound  />} />
              </Route>
              <Route path="auth" element={<Auth mode="login" />} />
              <Route path="signup" element={<Auth mode="registration" />} />
              <Route path="profile" element={<Profile />} />
              <Route path="" element={<Main />} />
              <Route path="*" element={<NotFound />} />
              
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
      

)


