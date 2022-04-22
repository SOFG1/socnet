import { setAuthThunk } from "./authReducer";
const TOGGLE_INIT = "app/TOGGLE INIT";

export const toggleInitAC = (isInit)=> ({type: TOGGLE_INIT, isInit});

//Initialize Thunk
export let initThunk = ()=> async (dispatch)=> {
    await dispatch(setAuthThunk())
    setTimeout(()=> {
        dispatch(toggleInitAC(true));
    }, 1100)
}

let initialState = {
    isInit: false,
}

let appReducer = (state = initialState, action)=> {
    switch (action.type) {
        case TOGGLE_INIT: 
            return {
                ...state,
                isInit: action.isInit
            }
        default:
            return state
    }
}

export default appReducer;