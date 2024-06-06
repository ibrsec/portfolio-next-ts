import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./features/projectSlice";




export const makeStore = () => configureStore({
    reducer:{
        projects:projectSlice,
    }
})
 


// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']