import "./mainpage.less"
import React, {useState, useEffect, lazy} from "react"
import Header from "../header/header"
const TaskList = lazy(() => import("../task/taskList/taskList"));
import Filter from "../filter/filter";


const Main = ()=>{
    return (
        <div className="main">
            <Header />
            <div className="container">
            <Filter />
                <div className="content">
                    <TaskList />
                </div>
                
            </div>
        </div>
    )
}

export default Main