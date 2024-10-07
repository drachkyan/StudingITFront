import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import "./mainstyle.less"

export const App = () =>{
    return (
        <div className="main">
            <Outlet />
        </div>
    )
}