import { setAuthThunk } from "./authReducer.ts";
const TOGGLE_INIT = "app/TOGGLE INIT";
const TOGGLE_SIDEBAR = "app/TOGGLE SIDEBAR";
const TOGGLE_NETWORK_ERROR = "app/TOGGLE NETWORK ERROR";

export const toggleInitAC: (isInit: boolean) => {
  type: typeof TOGGLE_INIT;
  isInit: boolean;
} = (isInit) => ({ type: TOGGLE_INIT, isInit });

export const toggleSidebarAC: (opened: boolean) => {
  type: typeof TOGGLE_SIDEBAR;
  opened: boolean;
} = (opened) => ({ type: TOGGLE_SIDEBAR, opened });

export const toggleNetworkErrorAC: (hasError: boolean) => {
  type: typeof TOGGLE_NETWORK_ERROR;
  hasError: boolean;
} = (hasError) => ({ type: TOGGLE_NETWORK_ERROR, hasError });


//Initialize Thunk
export let initThunk = () => async (dispatch: any) => {
  await dispatch(setAuthThunk());
  setTimeout(() => {
    dispatch(toggleInitAC(true));
  }, 100);
};

// State
let initialState = {
  isInit: false,
  sidebarOpened: false,
  networkError: false,
};

type InitialStateType = typeof initialState

//Reducer
let appReducer = (state:InitialStateType = initialState, action:any ):InitialStateType => {
  switch (action.type) {
    case TOGGLE_INIT:
      return {
        ...state,
        isInit: action.isInit,
      };
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarOpened: action.opened,
      };
    case TOGGLE_NETWORK_ERROR:
      return {
        ...state,
        networkError: action.hasError,
      };
    default:
      return state;
  }
};

export default appReducer;
