import { authApi } from "../api/api";

const SET_AUTH = "SET AUTH";
const TOGGLE_AUTH_FETCHING = "TOGGLE AUTH FETCHING"
// SetAuth AC
let setAuthAC = (profile, isAuth) => ({type: SET_AUTH, profile, isAuth});
let toggleFetchingAC = (isFetching) => ({type: TOGGLE_AUTH_FETCHING, isFetching})


// SetAuth Thunk
export let setAuthThunk = (dispatch)=> {
    dispatch(toggleFetchingAC(true));
    authApi.auth().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthAC(data.data, true));
        }
        if (data.resultCode === 1) {
            dispatch(setAuthAC({id: null, email: null, login: null}, false));
        }
        dispatch(toggleFetchingAC(false));
    })
    
}



//State
let initialState = {
    profile: {
        id: null,
        email: null,
        login: null,
    },
    isAuth: null,
    isFetching: false,
}

// Reducer
let authReducer = (state = initialState, action)=> {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                isAuth: action.isAuth,
                profile: action.profile,
            }
        case TOGGLE_AUTH_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        default:
            return state;
    }
}

export default authReducer