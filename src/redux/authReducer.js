const SET_AUTH = "SET AUTH";
let setAuthAC = (profile) => ({type: SET_AUTH, profile});

// SetAuth Thunk
export let setAuthThunk = (dispatch)=> {
    dispatch(setAuthAC({id: 22543, email: "edvaa@mail.ru", login: "edk001"}))
}



//State
let initialState = {
    profile: {
        id: null,
        email: null,
        login: null,
    },
    isAuth: false,
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
        default:
            return state;
    }
}

export default authReducer