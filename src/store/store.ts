import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { LoginSlice } from "./reducers/login";
import FilterSlice from "./reducers/filter";
import FilterUpdater from "./reducers/filtrerupdate";
import ListUpdater from "./reducers/tasklist";

const loginReducer = LoginSlice.reducer
const filterReducer = FilterSlice.reducer
const updaterReducer = FilterUpdater.reducer
const listReducer = ListUpdater.reducer

const rootReducer = combineReducers({
    loginReducer,
    filterReducer,
    updaterReducer,
    listReducer,
    
})

export const setupStore = ()=>{
    return configureStore({
        reducer:rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch  = AppStore['dispatch']