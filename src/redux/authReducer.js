import { authApi } from "../api/api";
import { change, untouch } from "redux-form";
import { setFriendsAC } from "./usersReducer";
import { setProfileAC } from "./profileReducer";

const SET_AUTH = "auth/SET AUTH";
const TOGGLE_AUTH_FETCHING = "auth/TOGGLE AUTH FETCHING";
const TOGGLE_LOGIN_BUTTON = "auth/TOGGLE LOGIN BUTTON";
const TOGGLE_LOGOUT = "auth/TOGGLE LOGOUT";
const SET_ERROR = "auth/SET_ERROR";
// SetAuth AC
let setAuthAC = (profile, isAuth) => ({ type: SET_AUTH, profile, isAuth });
let toggleFetchingAC = (isFetching) => ({
  type: TOGGLE_AUTH_FETCHING,
  isFetching,
});
let toggleButtonAC = () => ({ type: TOGGLE_LOGIN_BUTTON });
let toggleLogOutAC = (disabled) => ({ type: TOGGLE_LOGOUT, disabled });
let setErrorAC = (error)=> ({type: SET_ERROR, error});

// SetAuth Thunk
export let setAuthThunk = () => async (dispatch) => {
  dispatch(toggleFetchingAC(true));
  const data = await authApi.auth();
  if (data.resultCode === 0) {
    dispatch(setAuthAC(data.data, true));
  }
  if (data.resultCode === 1) {
    dispatch(setAuthAC({ id: null, email: null, login: null }, false));
  }
  dispatch(toggleFetchingAC(false));
};

//Login Thunk
export const loginThunk = (data) => async (dispatch) => {
  dispatch(toggleButtonAC());
  dispatch(change("login", "password", ""));
  dispatch(untouch("login", "email"));
  dispatch(untouch("login", "password"));
  const res = await authApi.login(data);
  if (res.data.resultCode !== 0) {
    dispatch(toggleButtonAC());
    dispatch(setErrorAC(res.data.messages ? res.data.messages[0] : "Something went wrong"))
  }
  if (res.data.resultCode === 0) {
    dispatch(change("login", "email", ""));
    dispatch(toggleButtonAC());
    dispatch(setAuthThunk());
    dispatch(setErrorAC(null));
  }
};

//Logout Thunk
export const logOutThunk = () => async (dispatch) => {
  dispatch(toggleLogOutAC(true));
  const code = await authApi.logOut();
  if (code === 0) {
    dispatch(setAuthThunk());
    dispatch(setFriendsAC([]));
    dispatch(setProfileAC(null))
    dispatch(toggleLogOutAC(false));
  }
};

//State
let initialState = {
  profile: {
    id: null,
    email: null,
    login: null,
  },
  isAuth: null,
  isFetching: false,
  buttonDisabled: false,
  logoutDisabled: false,
  submitError: null,
};

// Reducer
let authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        isAuth: action.isAuth,
        profile: action.profile,
      };
    case TOGGLE_AUTH_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_LOGIN_BUTTON:
      return {
        ...state,
        buttonDisabled: !state.buttonDisabled,
      };
    case TOGGLE_LOGOUT:
      return {
        ...state,
        logoutDisabled: action.disabled,
      };
      case SET_ERROR:
        return {
          ...state,
          submitError: action.error,
        }
    default:
      return state;
  }
};

export default authReducer;
