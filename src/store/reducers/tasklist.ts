import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Task {
    name: string,
    desc: string,
    hash_name: string,
    cat: number[]
}

interface taskList{
    tasks:Task[]
}

const initialState:taskList = {
    tasks:[]
}

const ListUpdater = createSlice({
    name:"tasklist",
    initialState,
    reducers:{
        addTasks(state, action:PayloadAction<Task[]>){
            state.tasks=action.payload
        }
    }
})

export default ListUpdater