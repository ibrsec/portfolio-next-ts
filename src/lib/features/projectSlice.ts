import { createSlice } from "@reduxjs/toolkit";

interface initialStateType  {
    projects : IProject[];
    loading:boolean;
    error:boolean;

}

const initialState : initialStateType = {
    projects : [],
    loading: false,
    error:false,
}


const projectSlice =  createSlice({
    name: "projects",
    initialState,
    reducers: {
        fetchStart : state => {
            state.loading = true;
            state.error = false;
        },
        fetchFail: state => {
            state.loading = false;
            state.error = true;
        },
        successProjects : (state,{payload}:{payload:IProject[]})=> {
            state.loading = false;
            state.error = false;
            state.projects = payload;
        }
    }
})

export const {fetchStart, fetchFail, successProjects} = projectSlice.actions
export default projectSlice.reducer;
