import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from './authReducer';
import thunk from 'redux-thunk';
import usersReducer from "./usersReducer";
import profileReducer from './profileReducer'

let rootReducer = combineReducers({
    auth: authReducer,
    users: usersReducer,
    profile: profileReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;