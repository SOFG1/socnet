import { authApi } from "../api/api";
import { change, untouch } from "redux-form";

const SET_AUTH = "SET AUTH";
const TOGGLE_AUTH_FETCHING = "TOGGLE AUTH FETCHING";
const TOGGLE_LOGIN_BUTTON = "TOGGLE LOGIN BUTTON";
const TOGGLE_NOT_FOUND = "TOGGLE NOT FOUND";
// SetAuth AC
let setAuthAC = (profile, isAuth) => ({ type: SET_AUTH, profile, isAuth });
let toggleFetchingAC = (isFetching) => ({
  type: TOGGLE_AUTH_FETCHING,
  isFetching,
});
let toggleButtonAC = () => ({ type: TOGGLE_LOGIN_BUTTON });
let toggleNotFoundAC = (isFound) => ({ type: TOGGLE_NOT_FOUND, isFound });

// SetAuth Thunk
export let setAuthThunk = () => (dispatch) => {
  dispatch(toggleFetchingAC(true));
  authApi.auth().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthAC(data.data, true));
    }
    if (data.resultCode === 1) {
      dispatch(setAuthAC({ id: null, email: null, login: null }, false));
    }
    dispatch(toggleFetchingAC(false));
  });
};

//Login Thunk
export const loginThunk = (data) => (dispatch) => {
  dispatch(toggleButtonAC());
  dispatch(change('login', 'email', ''))
  dispatch(change('login', 'password', ''))
  dispatch(untouch('login','email'))
  dispatch(untouch('login','password'))

  //Request
  authApi.login(data).then((res) => {
    if (res.data.resultCode === 1) {
      dispatch(toggleNotFoundAC(true));
      dispatch(toggleButtonAC());
    }
    if (res.data.resultCode === 0) {
        dispatch(toggleNotFoundAC(false));
        dispatch(toggleButtonAC());
        dispatch(setAuthThunk())
      }
  });
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
  userNotFound: false,
  buttonDisabled: false,
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
    case TOGGLE_NOT_FOUND:
      return {
        ...state,
        userNotFound: action.isFound,
      };
    default:
      return state;
  }
};

export default authReducer;
