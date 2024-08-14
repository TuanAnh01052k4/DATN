import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from './features/productSlice'
import authReducer from './features/authSlice.ts'
const rootReducer = combineReducers({
    product:productReducer,
    auth:authReducer
})
const store = configureStore({
    reducer: rootReducer
})

export default store