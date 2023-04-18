import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./Counter/CounterReducer";
import userReducer from "./User/userReducer";

const rootReducer = combineReducers({
    counter:counterReducer,
    user:userReducer,
});

export default rootReducer;