import { setAuthThunk } from "./authReducer";
const TOGGLE_INIT = "app/TOGGLE INIT";
const TOGGLE_SIDEBAR = "app/TOGGLE SIDEBAR"

export const toggleInitAC = (isInit)=> ({type: TOGGLE_INIT, isInit});
export const toggleSidebarAC = (opened)=> ({type: TOGGLE_SIDEBAR, opened})

//Initialize Thunk
export let initThunk = ()=> async (dispatch)=> {
    await dispatch(setAuthThunk())
    setTimeout(()=> {
        dispatch(toggleInitAC(true));
    }, 100)
}

// State
let initialState = {
    isInit: false,
    sidebarOpened: false,
}

//Reducer
let appReducer = (state = initialState, action)=> {
    switch (action.type) {
        case TOGGLE_INIT: 
            return {
                ...state,
                isInit: action.isInit
            }
        case TOGGLE_SIDEBAR:
            return {
                ...state,
                sidebarOpened: action.opened,
            }
        default:
            return state
    }
}

export default appReducer;