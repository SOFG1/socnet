import { authApi, securityApi } from "../api/api";
import { change, untouch } from "redux-form";
import { setFriendsAC } from "./usersReducer.ts";
import { setProfileAC } from "./profileReducer.ts";

const SET_AUTH = "auth/SET AUTH";
const TOGGLE_AUTH_FETCHING = "auth/TOGGLE AUTH FETCHING";
const TOGGLE_LOGIN_BUTTON = "auth/TOGGLE LOGIN BUTTON";
const TOGGLE_LOGOUT = "auth/TOGGLE LOGOUT";
const SET_ERROR = "auth/SET ERROR";
const SET_CAPTCHA = "auth/SET CAPTCHA";
const SET_FETCHING_CAPTCHA = "auth/SET FETCHING CAPTCHA";

type SetAuthProfileType = {
  email: string
  id: number
  login: string
}

type SetAuthActionType = {
  type: typeof SET_AUTH,
  profile: SetAuthProfileType,
  isAuth: boolean
}

let setAuthAC = ( profile: SetAuthProfileType, isAuth: boolean):SetAuthActionType => ({ type: SET_AUTH, profile, isAuth });

let toggleFetchingAC: (isFetching: boolean) => {
  type: typeof TOGGLE_AUTH_FETCHING;
  isFetching: boolean;
} = (isFetching) => ({
  type: TOGGLE_AUTH_FETCHING,
  isFetching,
});

let toggleButtonAC: () => { type: typeof TOGGLE_LOGIN_BUTTON } = () => ({
  type: TOGGLE_LOGIN_BUTTON,
});

let toggleLogOutAC: (disabled: boolean) => {
  type: typeof TOGGLE_LOGOUT;
  disabled: boolean;
} = (disabled) => ({ type: TOGGLE_LOGOUT, disabled });

let setErrorAC: (error) => { type: typeof SET_ERROR; error: boolean } = (
  error
) => ({ type: SET_ERROR, error });

let setCaptchaAC: (captcha: string) => {
  type: typeof SET_CAPTCHA;
  captcha: string;
} = (captcha) => ({ type: SET_CAPTCHA, captcha });

let setFetchingCaptchaAC: (isFetching: boolean) => {
  type: typeof SET_FETCHING_CAPTCHA;
  isFetching: boolean;
} = (isFetching) => ({
  type: SET_FETCHING_CAPTCHA,
  isFetching,
});

// SetAuth Thunk
export let setAuthThunk = () => async (dispatch:any) => {
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
type LoginDataType = {
  email: string
  password: string
  captcha?: string
}

export const loginThunk = (data:LoginDataType) => async (dispatch:any) => {
  dispatch(toggleButtonAC());
  dispatch(change("login", "password", ""));
  dispatch(untouch("login", "email"));
  dispatch(change("login", "captcha", ""));
  dispatch(untouch("login", "captcha"));
  dispatch(untouch("login", "password"));
  const res = await authApi.login(data);
  if (res.data.resultCode !== 0) {
    dispatch(toggleButtonAC());
    dispatch(
      setErrorAC(
        res.data.messages ? res.data.messages[0] : "Something went wrong"
      )
    );
  }
  if (res.data.resultCode === 0) {
    dispatch(change("login", "email", ""));
    dispatch(toggleButtonAC());
    dispatch(setAuthThunk());
    dispatch(setErrorAC(null));
    dispatch(setCaptchaAC(null));
  }
  if (res.data.resultCode === 10) {
    dispatch(setFetchingCaptchaAC(true));
    const captcha = await securityApi.getCaptcha();
    dispatch(setFetchingCaptchaAC(false));
    dispatch(setCaptchaAC(captcha));
  }
};

//Logout Thunk
export const logOutThunk = () => async (dispatch) => {
  dispatch(toggleLogOutAC(true));
  const code = await authApi.logOut();
  if (code === 0) {
    dispatch(setAuthThunk());
    dispatch(setFriendsAC([]));
    dispatch(setProfileAC(null));
    dispatch(toggleLogOutAC(false));
  }
};

//State
let initialState = {
  profile: {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
  },
  isAuth: null as boolean | null,
  isFetching: false,
  buttonDisabled: false,
  logoutDisabled: false,
  submitError: null as any,
  captcha: null as null | string, //If null captcha isn't required, here will be captcha's url
  fetchingCaptcha: false, // captcha is loading
};

type InitialStateType = typeof initialState

// Reducer
let authReducer = (state:InitialStateType = initialState, action: any):InitialStateType =>  {
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
      };
    case SET_CAPTCHA:
      return {
        ...state,
        captcha: action.captcha,
      };
    case SET_FETCHING_CAPTCHA:
      return {
        ...state,
        fetchingCaptcha: action.isFetching,
      };
    default:
      return state;
  }
};

export default authReducer;
