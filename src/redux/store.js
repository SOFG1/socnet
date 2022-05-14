import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer as formReducer } from "redux-form";
import authReducer from './authReducer.ts';
import thunk from 'redux-thunk';
import usersReducer from "./usersReducer.ts";
import profileReducer from './profileReducer.ts';
import appReducer from './appReducer.ts';

const rootReducer = combineReducers({
    auth: authReducer,
    users: usersReducer,
    profile: profileReducer,
    form: formReducer,
    app: appReducer,
});

const store = createStore(rootReducer,composeWithDevTools( applyMiddleware(thunk)));

export default store;