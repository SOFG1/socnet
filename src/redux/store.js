import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from './authReducer';
import thunk from 'redux-thunk';

let rootReducer = combineReducers({auth: authReducer});

let store = createStore(rootReducer, applyMiddleware(thunk));

//combineReducers({auth: authReducer,}
export default store;