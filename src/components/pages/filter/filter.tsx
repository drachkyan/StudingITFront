import { useAppDispatch, useAppSelector } from "../../../store/hooks/redux";
import FilterSlice from "../../../store/reducers/filter"
import { AppDispatch } from "../../../store/store";
import "./filter.less"
import React, { useState, useEffect } from 'react'

enum categories{
    programming=1,
    git=2
}

const Filter = ()=>{
    const filter = useAppSelector(state=>state.filterReducer)
    const dispatch = useAppDispatch()
    
    const change = (field:number)=>{
        dispatch(FilterSlice.actions.changeField(field))
    }
    const HandleApply=()=>{
        console.log(filter)
    }
    return(
        <div className="Filter">
            <div className="title"><p>Filter</p></div>
            <div className="fields">
                <div className="custom-checkbox filterField disableCopy">
                    <input type="checkbox" id="checkbox1" className="checkboxClass" onChange={()=>change(categories.programming)}/>
                    <label htmlFor="checkbox1">Programming</label>
                </div>
                <div className="custom-checkbox filterField disableCopy">
                    <input type="checkbox" id="git" className="checkboxClass" onChange={()=>change(categories.git)}/>
                    <label htmlFor="git"><img src="https://repository-images.githubusercontent.com/321181292/f6ecab80-8749-11eb-9e0b-0bb1fa038038" className="gitlogo" /></label>
                </div>
                <div className="apply disableCopy" onClick={HandleApply}><p>Apply</p></div>
            </div>
        </div>
    )
}

export default Filter