import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { LoginSlice } from "./reducers/login";
import {save,load} from "./storeSave"
import FilterSlice from "./reducers/filter";

const loginReducer = LoginSlice.reducer
const filterReducer = FilterSlice.reducer
const rootReducer = combineReducers({
    loginReducer,
    filterReducer
})

export const setupStore = ()=>{
    return configureStore({
        reducer:rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch  = AppStore['dispatch']