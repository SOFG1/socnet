import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from './authReducer';
import thunk from 'redux-thunk';
import usersReducer from "./usersReducer";

let rootReducer = combineReducers({
    auth: authReducer,
    users: usersReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;