import axios from "axios";
import FilterUpdater from "../../../store/reducers/filtrerupdate";
import { useAppDispatch } from "../../../store/hooks/redux";
import { AppDispatch } from "../../../store/store";
import ListUpdater from "../../../store/reducers/tasklist";
import { FILTER } from "../../../../constants";


interface filter{
    programming:boolean,
    git:boolean
}

interface requstFilter{
    cat:number[]
}

const getCats=(filter:filter)=>{
    const rFilter:requstFilter={cat:[]}
    if (filter.programming==true){
        rFilter.cat.push(1)
    }
    if (filter.git==true){
        rFilter.cat.push(2)
    }
    return rFilter
}

export const fetchList = (filter:filter)=> async (dispatch:AppDispatch)=>{
    try {
        const response = await axios.post(FILTER, getCats(filter))
        dispatch(FilterUpdater.actions.ListLoadingSuccess())
        dispatch(ListUpdater.actions.addTasks(response.data))
        
    } catch (error) {
        console.log(error)
        dispatch(FilterUpdater.actions.ListLoadingError())
    }
}