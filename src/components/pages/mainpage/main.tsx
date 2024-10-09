import "./mainpage.less"
import React, {useState, useEffect, lazy} from "react"
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
                    {isLogged? <p>Welcome</p>:null}
                    <TaskList />
                </div>
                
            </div>
        </div>
    )
}

export default Main