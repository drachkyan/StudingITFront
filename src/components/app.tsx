import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import "./mainstyle.less"
import { Provider } from 'react-redux'
import { setupStore } from '../store/store'

export const App = () =>{
    const store = setupStore();
    return (
        <Provider store={store}>
        <div className="main">
            <Outlet />
        </div>
        </Provider>
    )
}