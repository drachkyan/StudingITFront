import "./mainpage.less"
import React, {useState, useEffect, lazy, Suspense} from "react"
import Header from "../header/header"
const TaskList = lazy(() => import("../task/taskList/taskList"));
import Filter from "../filter/filter";
import { useAppSelector } from "../../../store/hooks/redux";

const Main = ()=>{
    const {isloading,error,isLogged} = useAppSelector(state=>state.loginReducer)
    return (
        <div className="main">
            <Header />
            <div className="container">
            <Filter />
                <div className="content">
                    <Suspense fallback={<div>Loading...</div>}>
                        <TaskList />
                    </Suspense>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Main