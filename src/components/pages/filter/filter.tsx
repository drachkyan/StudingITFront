import { useAppDispatch, useAppSelector } from "../../../store/hooks/redux";
import FilterSlice from "../../../store/reducers/filter"
import FilterUpdater from "../../../store/reducers/filtrerupdate";

import "./filter.less"
import React, { useState, useEffect, startTransition } from 'react'
import { fetchList } from "./request";
import ListUpdater from "../../../store/reducers/tasklist";


enum categories{
    programming=1,
    git=2
}

const Filter = ()=>{
    const filter = useAppSelector(state=>state.filterReducer)
    const {isLoading} = useAppSelector(state=>state.updaterReducer)
    const dispatch = useAppDispatch()
    
    useEffect(()=>{
        dispatch(FilterSlice.actions.makeFilterDefault())
        dispatch(fetchList(filter))
    },[])

    const change = (field:number)=>{
        dispatch(FilterSlice.actions.changeField(field))
    }
    
    const HandleApply=()=>{
        startTransition(() => {
            dispatch(fetchList(filter))
        });
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
                <div className="apply disableCopy" style={{background:isLoading?"green":"#B8EE91"}} onClick={HandleApply}><p>Apply</p></div>
            </div>
        </div>
    )
}

export default Filter