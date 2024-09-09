// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import projectSlice from "./features/projectSlice";
// import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // Tarayıcı local storage kullanımı için


// // root reducer
// const rootReducer = combineReducers({
//     projects:projectSlice,
//   });
  
//   // Persist config
//   const persistConfig = {
//     key: "portfolio-root",
//     storage,
//   };

//   // Persisted reducer 
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const makeStore = () => configureStore({
//     reducer: persistedReducer
// })
 
// // Persistor oluştur
// export const persistor = persistStore(makeStore());


// // Infer the type of makeStore
// export type AppStore = ReturnType<typeof makeStore>
// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<AppStore['getState']>
// export type AppDispatch = AppStore['dispatch']


import { combineReducers, configureStore } from "@reduxjs/toolkit";
import projectSlice from "./features/projectSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Root reducer
const rootReducer = combineReducers({
  projects: projectSlice,
});

// Persist config
const persistConfig = {
  key: "portfolio-root",
  storage,
};

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store ve Persistor'u singleton olarak oluşturun
export const makeStore = () =>
  configureStore({
    reducer: persistedReducer,
  });

// Tek bir store ve persistor örneği oluşturun
const store = makeStore();
export const persistor = persistStore(store);

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export default store;
