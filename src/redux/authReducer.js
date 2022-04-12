import { authApi } from "../api/api";

const SET_AUTH = "SET AUTH";
const TOGGLE_FETCHING = "TOGGLE FETCHING"
// SetAuth AC
let setAuthAC = (profile) => ({type: SET_AUTH, profile});
let toggleFetchingAC = (isFetching) => ({type: TOGGLE_FETCHING, isFetching})


// SetAuth Thunk
export let setAuthThunk = (dispatch)=> {
    dispatch(toggleFetchingAC(true));
    authApi.auth().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthAC(data.data))
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
    isAuth: false,
    isFetching: false,
}

// Reducer
let authReducer = (state = initialState, action)=> {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                isAuth: true,
                profile: action.profile,
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        default:
            return state;
    }
}

export default authReducer