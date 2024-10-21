import "./style.less"
import React, { StrictMode } from 'react';
import { lazy } from 'react';
import {createRoot} from 'react-dom/client'
import App from './components/app'
import {
  BrowserRouter,
    createBrowserRouter,
    Outlet,
    Route,
    RouterProvider,
    Routes,
  } from "react-router-dom";
const Task = lazy(() => import('./components/pages/task/taskComp/task'));
const Profile = lazy(() => import("./components/pages/profile/profile"));
const Auth = lazy(() => import("./components/auth/Auth"));
const NotFound = lazy(() => import("./components/pages/error404/notfound"));
const root:HTMLElement = document.getElementById("root");
import Main from "./components/pages/mainpage/main"
import { Provider } from "react-redux";
import TaskSolver from "./components/pages/task/taskComp/taskSolver";
import { setupStore } from "./store/store";

const container = createRoot(root);

const store = setupStore();

container.render(
  <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />}>
              <Route path="task" element={<Task/>}>
                <Route path="*" element={<TaskSolver  />} />
              </Route>
              <Route path="auth" element={<Auth mode="login" />} />
              <Route path="signup" element={<Auth mode="registration" />} />
              <Route path='testpath' element={<TaskSolver></TaskSolver>} />
              <Route path="profile" element={<Profile />} />
              <Route path="" element={<Main />} />
              <Route path="*" element={<NotFound />} />
              
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </StrictMode>
)


