import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer as formReducer } from "redux-form";
import authReducer from './authReducer';
import thunk from 'redux-thunk';
import usersReducer from "./usersReducer";
import profileReducer from './profileReducer';
import appReducer from './appReducer';
import { compose } from "redux";

const rootReducer = combineReducers({
    auth: authReducer,
    users: usersReducer,
    profile: profileReducer,
    form: formReducer,
    app: appReducer,
});

const store = createStore(rootReducer,composeWithDevTools( applyMiddleware(thunk)));

export default store;