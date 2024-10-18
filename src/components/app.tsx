import React, { lazy,Component } from 'react'
import { Outlet } from 'react-router-dom'
import "./mainstyle.less"
import { Provider } from 'react-redux'
import { setupStore } from '../store/store'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const Task = lazy(() => import('./pages/task/taskComp/task'));
const Profile = lazy(() => import("./pages/profile/profile"));
const Auth = lazy(() => import("./auth/Auth"));
const NotFound = lazy(() => import("./pages/error404/notfound"));
const root:HTMLElement = document.getElementById("root");
import Main from "./pages/mainpage/main"


const App = () => {
    const store = setupStore();
       return (
        <Provider store={store}>
            <div className="main">
                <Router>
                    <Routes>
                        <Route path='/task/*' element={<Task />}>
                            <Route path='*' element={<Task />} /> 
                        </Route>
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/signup' element={<Auth mode="registration" />} />
                        <Route path='/auth' element={<Auth mode="login" />} />
                        <Route path='/e404' element={<NotFound />} />
                        <Route path='/' Component={Main} />
                    </Routes>
                </Router>
            </div>
        </Provider>
           
       );
};

export default App;
   